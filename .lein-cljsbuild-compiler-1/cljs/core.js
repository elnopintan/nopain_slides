goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__29464 = (((x == null))?null:x);
if((p[goog.typeOf(x__29464)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$lang$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__29465__delegate = function (array,i,idxs){
return cljs.core.apply.cljs$lang$arity$3(aget,aget.cljs$lang$arity$2(array,i),idxs);
};
var G__29465 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29465__delegate.call(this, array, i, idxs);
};
G__29465.cljs$lang$maxFixedArity = 2;
G__29465.cljs$lang$applyTo = (function (arglist__29466){
var array = cljs.core.first(arglist__29466);
var i = cljs.core.first(cljs.core.next(arglist__29466));
var idxs = cljs.core.rest(cljs.core.next(arglist__29466));
return G__29465__delegate(array, i, idxs);
});
G__29465.cljs$lang$arity$variadic = G__29465__delegate;
return G__29465;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$lang$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.cljs$lang$arity$3((function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3937__auto____29551 = this$;
if(and__3937__auto____29551)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3937__auto____29551;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2396__auto____29552 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29553 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29552)]);
if(or__3939__auto____29553)
{return or__3939__auto____29553;
} else
{var or__3939__auto____29554 = (cljs.core._invoke["_"]);
if(or__3939__auto____29554)
{return or__3939__auto____29554;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3937__auto____29555 = this$;
if(and__3937__auto____29555)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3937__auto____29555;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2396__auto____29556 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29557 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29556)]);
if(or__3939__auto____29557)
{return or__3939__auto____29557;
} else
{var or__3939__auto____29558 = (cljs.core._invoke["_"]);
if(or__3939__auto____29558)
{return or__3939__auto____29558;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3937__auto____29559 = this$;
if(and__3937__auto____29559)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3937__auto____29559;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2396__auto____29560 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29561 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29560)]);
if(or__3939__auto____29561)
{return or__3939__auto____29561;
} else
{var or__3939__auto____29562 = (cljs.core._invoke["_"]);
if(or__3939__auto____29562)
{return or__3939__auto____29562;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3937__auto____29563 = this$;
if(and__3937__auto____29563)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3937__auto____29563;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2396__auto____29564 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29565 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29564)]);
if(or__3939__auto____29565)
{return or__3939__auto____29565;
} else
{var or__3939__auto____29566 = (cljs.core._invoke["_"]);
if(or__3939__auto____29566)
{return or__3939__auto____29566;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3937__auto____29567 = this$;
if(and__3937__auto____29567)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3937__auto____29567;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2396__auto____29568 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29569 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29568)]);
if(or__3939__auto____29569)
{return or__3939__auto____29569;
} else
{var or__3939__auto____29570 = (cljs.core._invoke["_"]);
if(or__3939__auto____29570)
{return or__3939__auto____29570;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3937__auto____29571 = this$;
if(and__3937__auto____29571)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3937__auto____29571;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2396__auto____29572 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29573 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29572)]);
if(or__3939__auto____29573)
{return or__3939__auto____29573;
} else
{var or__3939__auto____29574 = (cljs.core._invoke["_"]);
if(or__3939__auto____29574)
{return or__3939__auto____29574;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3937__auto____29575 = this$;
if(and__3937__auto____29575)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3937__auto____29575;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2396__auto____29576 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29577 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29576)]);
if(or__3939__auto____29577)
{return or__3939__auto____29577;
} else
{var or__3939__auto____29578 = (cljs.core._invoke["_"]);
if(or__3939__auto____29578)
{return or__3939__auto____29578;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3937__auto____29579 = this$;
if(and__3937__auto____29579)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3937__auto____29579;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2396__auto____29580 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29581 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29580)]);
if(or__3939__auto____29581)
{return or__3939__auto____29581;
} else
{var or__3939__auto____29582 = (cljs.core._invoke["_"]);
if(or__3939__auto____29582)
{return or__3939__auto____29582;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3937__auto____29583 = this$;
if(and__3937__auto____29583)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3937__auto____29583;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2396__auto____29584 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29585 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29584)]);
if(or__3939__auto____29585)
{return or__3939__auto____29585;
} else
{var or__3939__auto____29586 = (cljs.core._invoke["_"]);
if(or__3939__auto____29586)
{return or__3939__auto____29586;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3937__auto____29587 = this$;
if(and__3937__auto____29587)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3937__auto____29587;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2396__auto____29588 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29589 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29588)]);
if(or__3939__auto____29589)
{return or__3939__auto____29589;
} else
{var or__3939__auto____29590 = (cljs.core._invoke["_"]);
if(or__3939__auto____29590)
{return or__3939__auto____29590;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3937__auto____29591 = this$;
if(and__3937__auto____29591)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3937__auto____29591;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2396__auto____29592 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29593 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29592)]);
if(or__3939__auto____29593)
{return or__3939__auto____29593;
} else
{var or__3939__auto____29594 = (cljs.core._invoke["_"]);
if(or__3939__auto____29594)
{return or__3939__auto____29594;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3937__auto____29595 = this$;
if(and__3937__auto____29595)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3937__auto____29595;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2396__auto____29596 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29597 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29596)]);
if(or__3939__auto____29597)
{return or__3939__auto____29597;
} else
{var or__3939__auto____29598 = (cljs.core._invoke["_"]);
if(or__3939__auto____29598)
{return or__3939__auto____29598;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3937__auto____29599 = this$;
if(and__3937__auto____29599)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3937__auto____29599;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2396__auto____29600 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29601 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29600)]);
if(or__3939__auto____29601)
{return or__3939__auto____29601;
} else
{var or__3939__auto____29602 = (cljs.core._invoke["_"]);
if(or__3939__auto____29602)
{return or__3939__auto____29602;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3937__auto____29603 = this$;
if(and__3937__auto____29603)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3937__auto____29603;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2396__auto____29604 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29605 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29604)]);
if(or__3939__auto____29605)
{return or__3939__auto____29605;
} else
{var or__3939__auto____29606 = (cljs.core._invoke["_"]);
if(or__3939__auto____29606)
{return or__3939__auto____29606;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3937__auto____29607 = this$;
if(and__3937__auto____29607)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3937__auto____29607;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2396__auto____29608 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29609 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29608)]);
if(or__3939__auto____29609)
{return or__3939__auto____29609;
} else
{var or__3939__auto____29610 = (cljs.core._invoke["_"]);
if(or__3939__auto____29610)
{return or__3939__auto____29610;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3937__auto____29611 = this$;
if(and__3937__auto____29611)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3937__auto____29611;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2396__auto____29612 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29613 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29612)]);
if(or__3939__auto____29613)
{return or__3939__auto____29613;
} else
{var or__3939__auto____29614 = (cljs.core._invoke["_"]);
if(or__3939__auto____29614)
{return or__3939__auto____29614;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3937__auto____29615 = this$;
if(and__3937__auto____29615)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3937__auto____29615;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2396__auto____29616 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29617 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29616)]);
if(or__3939__auto____29617)
{return or__3939__auto____29617;
} else
{var or__3939__auto____29618 = (cljs.core._invoke["_"]);
if(or__3939__auto____29618)
{return or__3939__auto____29618;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3937__auto____29619 = this$;
if(and__3937__auto____29619)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3937__auto____29619;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2396__auto____29620 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29621 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29620)]);
if(or__3939__auto____29621)
{return or__3939__auto____29621;
} else
{var or__3939__auto____29622 = (cljs.core._invoke["_"]);
if(or__3939__auto____29622)
{return or__3939__auto____29622;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3937__auto____29623 = this$;
if(and__3937__auto____29623)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3937__auto____29623;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2396__auto____29624 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29625 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29624)]);
if(or__3939__auto____29625)
{return or__3939__auto____29625;
} else
{var or__3939__auto____29626 = (cljs.core._invoke["_"]);
if(or__3939__auto____29626)
{return or__3939__auto____29626;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3937__auto____29627 = this$;
if(and__3937__auto____29627)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3937__auto____29627;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2396__auto____29628 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29629 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29628)]);
if(or__3939__auto____29629)
{return or__3939__auto____29629;
} else
{var or__3939__auto____29630 = (cljs.core._invoke["_"]);
if(or__3939__auto____29630)
{return or__3939__auto____29630;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3937__auto____29631 = this$;
if(and__3937__auto____29631)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3937__auto____29631;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2396__auto____29632 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29633 = (cljs.core._invoke[goog.typeOf(x__2396__auto____29632)]);
if(or__3939__auto____29633)
{return or__3939__auto____29633;
} else
{var or__3939__auto____29634 = (cljs.core._invoke["_"]);
if(or__3939__auto____29634)
{return or__3939__auto____29634;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3937__auto____29639 = coll;
if(and__3937__auto____29639)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3937__auto____29639;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2396__auto____29640 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29641 = (cljs.core._count[goog.typeOf(x__2396__auto____29640)]);
if(or__3939__auto____29641)
{return or__3939__auto____29641;
} else
{var or__3939__auto____29642 = (cljs.core._count["_"]);
if(or__3939__auto____29642)
{return or__3939__auto____29642;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3937__auto____29647 = coll;
if(and__3937__auto____29647)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3937__auto____29647;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2396__auto____29648 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29649 = (cljs.core._empty[goog.typeOf(x__2396__auto____29648)]);
if(or__3939__auto____29649)
{return or__3939__auto____29649;
} else
{var or__3939__auto____29650 = (cljs.core._empty["_"]);
if(or__3939__auto____29650)
{return or__3939__auto____29650;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3937__auto____29655 = coll;
if(and__3937__auto____29655)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3937__auto____29655;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2396__auto____29656 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29657 = (cljs.core._conj[goog.typeOf(x__2396__auto____29656)]);
if(or__3939__auto____29657)
{return or__3939__auto____29657;
} else
{var or__3939__auto____29658 = (cljs.core._conj["_"]);
if(or__3939__auto____29658)
{return or__3939__auto____29658;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3937__auto____29667 = coll;
if(and__3937__auto____29667)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3937__auto____29667;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2396__auto____29668 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29669 = (cljs.core._nth[goog.typeOf(x__2396__auto____29668)]);
if(or__3939__auto____29669)
{return or__3939__auto____29669;
} else
{var or__3939__auto____29670 = (cljs.core._nth["_"]);
if(or__3939__auto____29670)
{return or__3939__auto____29670;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3937__auto____29671 = coll;
if(and__3937__auto____29671)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3937__auto____29671;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2396__auto____29672 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29673 = (cljs.core._nth[goog.typeOf(x__2396__auto____29672)]);
if(or__3939__auto____29673)
{return or__3939__auto____29673;
} else
{var or__3939__auto____29674 = (cljs.core._nth["_"]);
if(or__3939__auto____29674)
{return or__3939__auto____29674;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3937__auto____29679 = coll;
if(and__3937__auto____29679)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3937__auto____29679;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2396__auto____29680 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29681 = (cljs.core._first[goog.typeOf(x__2396__auto____29680)]);
if(or__3939__auto____29681)
{return or__3939__auto____29681;
} else
{var or__3939__auto____29682 = (cljs.core._first["_"]);
if(or__3939__auto____29682)
{return or__3939__auto____29682;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3937__auto____29687 = coll;
if(and__3937__auto____29687)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3937__auto____29687;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2396__auto____29688 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29689 = (cljs.core._rest[goog.typeOf(x__2396__auto____29688)]);
if(or__3939__auto____29689)
{return or__3939__auto____29689;
} else
{var or__3939__auto____29690 = (cljs.core._rest["_"]);
if(or__3939__auto____29690)
{return or__3939__auto____29690;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3937__auto____29695 = coll;
if(and__3937__auto____29695)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3937__auto____29695;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2396__auto____29696 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29697 = (cljs.core._next[goog.typeOf(x__2396__auto____29696)]);
if(or__3939__auto____29697)
{return or__3939__auto____29697;
} else
{var or__3939__auto____29698 = (cljs.core._next["_"]);
if(or__3939__auto____29698)
{return or__3939__auto____29698;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3937__auto____29707 = o;
if(and__3937__auto____29707)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3937__auto____29707;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2396__auto____29708 = (((o == null))?null:o);
return (function (){var or__3939__auto____29709 = (cljs.core._lookup[goog.typeOf(x__2396__auto____29708)]);
if(or__3939__auto____29709)
{return or__3939__auto____29709;
} else
{var or__3939__auto____29710 = (cljs.core._lookup["_"]);
if(or__3939__auto____29710)
{return or__3939__auto____29710;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3937__auto____29711 = o;
if(and__3937__auto____29711)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3937__auto____29711;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2396__auto____29712 = (((o == null))?null:o);
return (function (){var or__3939__auto____29713 = (cljs.core._lookup[goog.typeOf(x__2396__auto____29712)]);
if(or__3939__auto____29713)
{return or__3939__auto____29713;
} else
{var or__3939__auto____29714 = (cljs.core._lookup["_"]);
if(or__3939__auto____29714)
{return or__3939__auto____29714;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3937__auto____29719 = coll;
if(and__3937__auto____29719)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3937__auto____29719;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2396__auto____29720 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29721 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2396__auto____29720)]);
if(or__3939__auto____29721)
{return or__3939__auto____29721;
} else
{var or__3939__auto____29722 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3939__auto____29722)
{return or__3939__auto____29722;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3937__auto____29727 = coll;
if(and__3937__auto____29727)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3937__auto____29727;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2396__auto____29728 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29729 = (cljs.core._assoc[goog.typeOf(x__2396__auto____29728)]);
if(or__3939__auto____29729)
{return or__3939__auto____29729;
} else
{var or__3939__auto____29730 = (cljs.core._assoc["_"]);
if(or__3939__auto____29730)
{return or__3939__auto____29730;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3937__auto____29735 = coll;
if(and__3937__auto____29735)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3937__auto____29735;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2396__auto____29736 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29737 = (cljs.core._dissoc[goog.typeOf(x__2396__auto____29736)]);
if(or__3939__auto____29737)
{return or__3939__auto____29737;
} else
{var or__3939__auto____29738 = (cljs.core._dissoc["_"]);
if(or__3939__auto____29738)
{return or__3939__auto____29738;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3937__auto____29743 = coll;
if(and__3937__auto____29743)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3937__auto____29743;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2396__auto____29744 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29745 = (cljs.core._key[goog.typeOf(x__2396__auto____29744)]);
if(or__3939__auto____29745)
{return or__3939__auto____29745;
} else
{var or__3939__auto____29746 = (cljs.core._key["_"]);
if(or__3939__auto____29746)
{return or__3939__auto____29746;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3937__auto____29751 = coll;
if(and__3937__auto____29751)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3937__auto____29751;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2396__auto____29752 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29753 = (cljs.core._val[goog.typeOf(x__2396__auto____29752)]);
if(or__3939__auto____29753)
{return or__3939__auto____29753;
} else
{var or__3939__auto____29754 = (cljs.core._val["_"]);
if(or__3939__auto____29754)
{return or__3939__auto____29754;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3937__auto____29759 = coll;
if(and__3937__auto____29759)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3937__auto____29759;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2396__auto____29760 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29761 = (cljs.core._disjoin[goog.typeOf(x__2396__auto____29760)]);
if(or__3939__auto____29761)
{return or__3939__auto____29761;
} else
{var or__3939__auto____29762 = (cljs.core._disjoin["_"]);
if(or__3939__auto____29762)
{return or__3939__auto____29762;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3937__auto____29767 = coll;
if(and__3937__auto____29767)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3937__auto____29767;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2396__auto____29768 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29769 = (cljs.core._peek[goog.typeOf(x__2396__auto____29768)]);
if(or__3939__auto____29769)
{return or__3939__auto____29769;
} else
{var or__3939__auto____29770 = (cljs.core._peek["_"]);
if(or__3939__auto____29770)
{return or__3939__auto____29770;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3937__auto____29775 = coll;
if(and__3937__auto____29775)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3937__auto____29775;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2396__auto____29776 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29777 = (cljs.core._pop[goog.typeOf(x__2396__auto____29776)]);
if(or__3939__auto____29777)
{return or__3939__auto____29777;
} else
{var or__3939__auto____29778 = (cljs.core._pop["_"]);
if(or__3939__auto____29778)
{return or__3939__auto____29778;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3937__auto____29783 = coll;
if(and__3937__auto____29783)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3937__auto____29783;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2396__auto____29784 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29785 = (cljs.core._assoc_n[goog.typeOf(x__2396__auto____29784)]);
if(or__3939__auto____29785)
{return or__3939__auto____29785;
} else
{var or__3939__auto____29786 = (cljs.core._assoc_n["_"]);
if(or__3939__auto____29786)
{return or__3939__auto____29786;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3937__auto____29791 = o;
if(and__3937__auto____29791)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3937__auto____29791;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2396__auto____29792 = (((o == null))?null:o);
return (function (){var or__3939__auto____29793 = (cljs.core._deref[goog.typeOf(x__2396__auto____29792)]);
if(or__3939__auto____29793)
{return or__3939__auto____29793;
} else
{var or__3939__auto____29794 = (cljs.core._deref["_"]);
if(or__3939__auto____29794)
{return or__3939__auto____29794;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3937__auto____29799 = o;
if(and__3937__auto____29799)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3937__auto____29799;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2396__auto____29800 = (((o == null))?null:o);
return (function (){var or__3939__auto____29801 = (cljs.core._deref_with_timeout[goog.typeOf(x__2396__auto____29800)]);
if(or__3939__auto____29801)
{return or__3939__auto____29801;
} else
{var or__3939__auto____29802 = (cljs.core._deref_with_timeout["_"]);
if(or__3939__auto____29802)
{return or__3939__auto____29802;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3937__auto____29807 = o;
if(and__3937__auto____29807)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3937__auto____29807;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2396__auto____29808 = (((o == null))?null:o);
return (function (){var or__3939__auto____29809 = (cljs.core._meta[goog.typeOf(x__2396__auto____29808)]);
if(or__3939__auto____29809)
{return or__3939__auto____29809;
} else
{var or__3939__auto____29810 = (cljs.core._meta["_"]);
if(or__3939__auto____29810)
{return or__3939__auto____29810;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3937__auto____29815 = o;
if(and__3937__auto____29815)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3937__auto____29815;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2396__auto____29816 = (((o == null))?null:o);
return (function (){var or__3939__auto____29817 = (cljs.core._with_meta[goog.typeOf(x__2396__auto____29816)]);
if(or__3939__auto____29817)
{return or__3939__auto____29817;
} else
{var or__3939__auto____29818 = (cljs.core._with_meta["_"]);
if(or__3939__auto____29818)
{return or__3939__auto____29818;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3937__auto____29827 = coll;
if(and__3937__auto____29827)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3937__auto____29827;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2396__auto____29828 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29829 = (cljs.core._reduce[goog.typeOf(x__2396__auto____29828)]);
if(or__3939__auto____29829)
{return or__3939__auto____29829;
} else
{var or__3939__auto____29830 = (cljs.core._reduce["_"]);
if(or__3939__auto____29830)
{return or__3939__auto____29830;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3937__auto____29831 = coll;
if(and__3937__auto____29831)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3937__auto____29831;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2396__auto____29832 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29833 = (cljs.core._reduce[goog.typeOf(x__2396__auto____29832)]);
if(or__3939__auto____29833)
{return or__3939__auto____29833;
} else
{var or__3939__auto____29834 = (cljs.core._reduce["_"]);
if(or__3939__auto____29834)
{return or__3939__auto____29834;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3937__auto____29839 = coll;
if(and__3937__auto____29839)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3937__auto____29839;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2396__auto____29840 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29841 = (cljs.core._kv_reduce[goog.typeOf(x__2396__auto____29840)]);
if(or__3939__auto____29841)
{return or__3939__auto____29841;
} else
{var or__3939__auto____29842 = (cljs.core._kv_reduce["_"]);
if(or__3939__auto____29842)
{return or__3939__auto____29842;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3937__auto____29847 = o;
if(and__3937__auto____29847)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3937__auto____29847;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2396__auto____29848 = (((o == null))?null:o);
return (function (){var or__3939__auto____29849 = (cljs.core._equiv[goog.typeOf(x__2396__auto____29848)]);
if(or__3939__auto____29849)
{return or__3939__auto____29849;
} else
{var or__3939__auto____29850 = (cljs.core._equiv["_"]);
if(or__3939__auto____29850)
{return or__3939__auto____29850;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3937__auto____29855 = o;
if(and__3937__auto____29855)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3937__auto____29855;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2396__auto____29856 = (((o == null))?null:o);
return (function (){var or__3939__auto____29857 = (cljs.core._hash[goog.typeOf(x__2396__auto____29856)]);
if(or__3939__auto____29857)
{return or__3939__auto____29857;
} else
{var or__3939__auto____29858 = (cljs.core._hash["_"]);
if(or__3939__auto____29858)
{return or__3939__auto____29858;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3937__auto____29863 = o;
if(and__3937__auto____29863)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3937__auto____29863;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2396__auto____29864 = (((o == null))?null:o);
return (function (){var or__3939__auto____29865 = (cljs.core._seq[goog.typeOf(x__2396__auto____29864)]);
if(or__3939__auto____29865)
{return or__3939__auto____29865;
} else
{var or__3939__auto____29866 = (cljs.core._seq["_"]);
if(or__3939__auto____29866)
{return or__3939__auto____29866;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3937__auto____29871 = coll;
if(and__3937__auto____29871)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3937__auto____29871;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2396__auto____29872 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29873 = (cljs.core._rseq[goog.typeOf(x__2396__auto____29872)]);
if(or__3939__auto____29873)
{return or__3939__auto____29873;
} else
{var or__3939__auto____29874 = (cljs.core._rseq["_"]);
if(or__3939__auto____29874)
{return or__3939__auto____29874;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3937__auto____29879 = coll;
if(and__3937__auto____29879)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3937__auto____29879;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2396__auto____29880 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29881 = (cljs.core._sorted_seq[goog.typeOf(x__2396__auto____29880)]);
if(or__3939__auto____29881)
{return or__3939__auto____29881;
} else
{var or__3939__auto____29882 = (cljs.core._sorted_seq["_"]);
if(or__3939__auto____29882)
{return or__3939__auto____29882;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3937__auto____29887 = coll;
if(and__3937__auto____29887)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3937__auto____29887;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2396__auto____29888 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29889 = (cljs.core._sorted_seq_from[goog.typeOf(x__2396__auto____29888)]);
if(or__3939__auto____29889)
{return or__3939__auto____29889;
} else
{var or__3939__auto____29890 = (cljs.core._sorted_seq_from["_"]);
if(or__3939__auto____29890)
{return or__3939__auto____29890;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3937__auto____29895 = coll;
if(and__3937__auto____29895)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3937__auto____29895;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2396__auto____29896 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29897 = (cljs.core._entry_key[goog.typeOf(x__2396__auto____29896)]);
if(or__3939__auto____29897)
{return or__3939__auto____29897;
} else
{var or__3939__auto____29898 = (cljs.core._entry_key["_"]);
if(or__3939__auto____29898)
{return or__3939__auto____29898;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3937__auto____29903 = coll;
if(and__3937__auto____29903)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3937__auto____29903;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2396__auto____29904 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29905 = (cljs.core._comparator[goog.typeOf(x__2396__auto____29904)]);
if(or__3939__auto____29905)
{return or__3939__auto____29905;
} else
{var or__3939__auto____29906 = (cljs.core._comparator["_"]);
if(or__3939__auto____29906)
{return or__3939__auto____29906;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3937__auto____29911 = o;
if(and__3937__auto____29911)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3937__auto____29911;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2396__auto____29912 = (((o == null))?null:o);
return (function (){var or__3939__auto____29913 = (cljs.core._pr_seq[goog.typeOf(x__2396__auto____29912)]);
if(or__3939__auto____29913)
{return or__3939__auto____29913;
} else
{var or__3939__auto____29914 = (cljs.core._pr_seq["_"]);
if(or__3939__auto____29914)
{return or__3939__auto____29914;
} else
{throw cljs.core.missing_protocol("IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3937__auto____29919 = d;
if(and__3937__auto____29919)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3937__auto____29919;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2396__auto____29920 = (((d == null))?null:d);
return (function (){var or__3939__auto____29921 = (cljs.core._realized_QMARK_[goog.typeOf(x__2396__auto____29920)]);
if(or__3939__auto____29921)
{return or__3939__auto____29921;
} else
{var or__3939__auto____29922 = (cljs.core._realized_QMARK_["_"]);
if(or__3939__auto____29922)
{return or__3939__auto____29922;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3937__auto____29927 = this$;
if(and__3937__auto____29927)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3937__auto____29927;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2396__auto____29928 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29929 = (cljs.core._notify_watches[goog.typeOf(x__2396__auto____29928)]);
if(or__3939__auto____29929)
{return or__3939__auto____29929;
} else
{var or__3939__auto____29930 = (cljs.core._notify_watches["_"]);
if(or__3939__auto____29930)
{return or__3939__auto____29930;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3937__auto____29935 = this$;
if(and__3937__auto____29935)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3937__auto____29935;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2396__auto____29936 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29937 = (cljs.core._add_watch[goog.typeOf(x__2396__auto____29936)]);
if(or__3939__auto____29937)
{return or__3939__auto____29937;
} else
{var or__3939__auto____29938 = (cljs.core._add_watch["_"]);
if(or__3939__auto____29938)
{return or__3939__auto____29938;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3937__auto____29943 = this$;
if(and__3937__auto____29943)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3937__auto____29943;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2396__auto____29944 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____29945 = (cljs.core._remove_watch[goog.typeOf(x__2396__auto____29944)]);
if(or__3939__auto____29945)
{return or__3939__auto____29945;
} else
{var or__3939__auto____29946 = (cljs.core._remove_watch["_"]);
if(or__3939__auto____29946)
{return or__3939__auto____29946;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3937__auto____29951 = coll;
if(and__3937__auto____29951)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3937__auto____29951;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2396__auto____29952 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____29953 = (cljs.core._as_transient[goog.typeOf(x__2396__auto____29952)]);
if(or__3939__auto____29953)
{return or__3939__auto____29953;
} else
{var or__3939__auto____29954 = (cljs.core._as_transient["_"]);
if(or__3939__auto____29954)
{return or__3939__auto____29954;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3937__auto____29959 = tcoll;
if(and__3937__auto____29959)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3937__auto____29959;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2396__auto____29960 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____29961 = (cljs.core._conj_BANG_[goog.typeOf(x__2396__auto____29960)]);
if(or__3939__auto____29961)
{return or__3939__auto____29961;
} else
{var or__3939__auto____29962 = (cljs.core._conj_BANG_["_"]);
if(or__3939__auto____29962)
{return or__3939__auto____29962;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3937__auto____29967 = tcoll;
if(and__3937__auto____29967)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3937__auto____29967;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2396__auto____29968 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____29969 = (cljs.core._persistent_BANG_[goog.typeOf(x__2396__auto____29968)]);
if(or__3939__auto____29969)
{return or__3939__auto____29969;
} else
{var or__3939__auto____29970 = (cljs.core._persistent_BANG_["_"]);
if(or__3939__auto____29970)
{return or__3939__auto____29970;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3937__auto____29975 = tcoll;
if(and__3937__auto____29975)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3937__auto____29975;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2396__auto____29976 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____29977 = (cljs.core._assoc_BANG_[goog.typeOf(x__2396__auto____29976)]);
if(or__3939__auto____29977)
{return or__3939__auto____29977;
} else
{var or__3939__auto____29978 = (cljs.core._assoc_BANG_["_"]);
if(or__3939__auto____29978)
{return or__3939__auto____29978;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3937__auto____29983 = tcoll;
if(and__3937__auto____29983)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3937__auto____29983;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2396__auto____29984 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____29985 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2396__auto____29984)]);
if(or__3939__auto____29985)
{return or__3939__auto____29985;
} else
{var or__3939__auto____29986 = (cljs.core._dissoc_BANG_["_"]);
if(or__3939__auto____29986)
{return or__3939__auto____29986;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3937__auto____29991 = tcoll;
if(and__3937__auto____29991)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3937__auto____29991;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2396__auto____29992 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____29993 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2396__auto____29992)]);
if(or__3939__auto____29993)
{return or__3939__auto____29993;
} else
{var or__3939__auto____29994 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3939__auto____29994)
{return or__3939__auto____29994;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3937__auto____29999 = tcoll;
if(and__3937__auto____29999)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3937__auto____29999;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2396__auto____30000 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____30001 = (cljs.core._pop_BANG_[goog.typeOf(x__2396__auto____30000)]);
if(or__3939__auto____30001)
{return or__3939__auto____30001;
} else
{var or__3939__auto____30002 = (cljs.core._pop_BANG_["_"]);
if(or__3939__auto____30002)
{return or__3939__auto____30002;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3937__auto____30007 = tcoll;
if(and__3937__auto____30007)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3937__auto____30007;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2396__auto____30008 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____30009 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2396__auto____30008)]);
if(or__3939__auto____30009)
{return or__3939__auto____30009;
} else
{var or__3939__auto____30010 = (cljs.core._disjoin_BANG_["_"]);
if(or__3939__auto____30010)
{return or__3939__auto____30010;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3937__auto____30015 = x;
if(and__3937__auto____30015)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3937__auto____30015;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2396__auto____30016 = (((x == null))?null:x);
return (function (){var or__3939__auto____30017 = (cljs.core._compare[goog.typeOf(x__2396__auto____30016)]);
if(or__3939__auto____30017)
{return or__3939__auto____30017;
} else
{var or__3939__auto____30018 = (cljs.core._compare["_"]);
if(or__3939__auto____30018)
{return or__3939__auto____30018;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3937__auto____30023 = coll;
if(and__3937__auto____30023)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3937__auto____30023;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2396__auto____30024 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____30025 = (cljs.core._drop_first[goog.typeOf(x__2396__auto____30024)]);
if(or__3939__auto____30025)
{return or__3939__auto____30025;
} else
{var or__3939__auto____30026 = (cljs.core._drop_first["_"]);
if(or__3939__auto____30026)
{return or__3939__auto____30026;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3937__auto____30031 = coll;
if(and__3937__auto____30031)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3937__auto____30031;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2396__auto____30032 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____30033 = (cljs.core._chunked_first[goog.typeOf(x__2396__auto____30032)]);
if(or__3939__auto____30033)
{return or__3939__auto____30033;
} else
{var or__3939__auto____30034 = (cljs.core._chunked_first["_"]);
if(or__3939__auto____30034)
{return or__3939__auto____30034;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3937__auto____30039 = coll;
if(and__3937__auto____30039)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3937__auto____30039;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2396__auto____30040 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____30041 = (cljs.core._chunked_rest[goog.typeOf(x__2396__auto____30040)]);
if(or__3939__auto____30041)
{return or__3939__auto____30041;
} else
{var or__3939__auto____30042 = (cljs.core._chunked_rest["_"]);
if(or__3939__auto____30042)
{return or__3939__auto____30042;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3937__auto____30047 = coll;
if(and__3937__auto____30047)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3937__auto____30047;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2396__auto____30048 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____30049 = (cljs.core._chunked_next[goog.typeOf(x__2396__auto____30048)]);
if(or__3939__auto____30049)
{return or__3939__auto____30049;
} else
{var or__3939__auto____30050 = (cljs.core._chunked_next["_"]);
if(or__3939__auto____30050)
{return or__3939__auto____30050;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3939__auto____30052 = (x === y);
if(or__3939__auto____30052)
{return or__3939__auto____30052;
} else
{return cljs.core._equiv(x,y);
}
});
var _EQ___3 = (function() { 
var G__30053__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__30054 = y;
var G__30055 = cljs.core.first(more);
var G__30056 = cljs.core.next(more);
x = G__30054;
y = G__30055;
more = G__30056;
continue;
}
} else
{return _EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__30053 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30053__delegate.call(this, x, y, more);
};
G__30053.cljs$lang$maxFixedArity = 2;
G__30053.cljs$lang$applyTo = (function (arglist__30057){
var x = cljs.core.first(arglist__30057);
var y = cljs.core.first(cljs.core.next(arglist__30057));
var more = cljs.core.rest(cljs.core.next(arglist__30057));
return G__30053__delegate(x, y, more);
});
G__30053.cljs$lang$arity$variadic = G__30053__delegate;
return G__30053;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__30058 = null;
var G__30058__2 = (function (o,k){
return null;
});
var G__30058__3 = (function (o,k,not_found){
return not_found;
});
G__30058 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__30058__2.call(this,o,k);
case 3:
return G__30058__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30058;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.cljs$lang$arity$variadic(cljs.core.array_seq([k,v], 0));
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.cljs$lang$arity$1(o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__30059 = null;
var G__30059__2 = (function (_,f){
return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
});
var G__30059__3 = (function (_,f,start){
return start;
});
G__30059 = function(_,f,start){
switch(arguments.length){
case 2:
return G__30059__2.call(this,_,f);
case 3:
return G__30059__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30059;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.cljs$lang$arity$1("nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.cljs$lang$arity$0();
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__30060 = null;
var G__30060__2 = (function (_,n){
return null;
});
var G__30060__3 = (function (_,n,not_found){
return not_found;
});
G__30060 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__30060__2.call(this,_,n);
case 3:
return G__30060__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30060;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3937__auto____30061 = cljs.core.instance_QMARK_(Date,other);
if(and__3937__auto____30061)
{return (o.toString() === other.toString());
} else
{return and__3937__auto____30061;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__30074 = cljs.core._count(cicoll);
if((cnt__30074 === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__30075 = cljs.core._nth.cljs$lang$arity$2(cicoll,0);
var n__30076 = 1;
while(true){
if((n__30076 < cnt__30074))
{var nval__30077 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__30075,cljs.core._nth.cljs$lang$arity$2(cicoll,n__30076)) : f.call(null,val__30075,cljs.core._nth.cljs$lang$arity$2(cicoll,n__30076)));
if(cljs.core.reduced_QMARK_(nval__30077))
{return cljs.core.deref(nval__30077);
} else
{{
var G__30086 = nval__30077;
var G__30087 = (n__30076 + 1);
val__30075 = G__30086;
n__30076 = G__30087;
continue;
}
}
} else
{return val__30075;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__30078 = cljs.core._count(cicoll);
var val__30079 = val;
var n__30080 = 0;
while(true){
if((n__30080 < cnt__30078))
{var nval__30081 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__30079,cljs.core._nth.cljs$lang$arity$2(cicoll,n__30080)) : f.call(null,val__30079,cljs.core._nth.cljs$lang$arity$2(cicoll,n__30080)));
if(cljs.core.reduced_QMARK_(nval__30081))
{return cljs.core.deref(nval__30081);
} else
{{
var G__30088 = nval__30081;
var G__30089 = (n__30080 + 1);
val__30079 = G__30088;
n__30080 = G__30089;
continue;
}
}
} else
{return val__30079;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__30082 = cljs.core._count(cicoll);
var val__30083 = val;
var n__30084 = idx;
while(true){
if((n__30084 < cnt__30082))
{var nval__30085 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__30083,cljs.core._nth.cljs$lang$arity$2(cicoll,n__30084)) : f.call(null,val__30083,cljs.core._nth.cljs$lang$arity$2(cicoll,n__30084)));
if(cljs.core.reduced_QMARK_(nval__30085))
{return cljs.core.deref(nval__30085);
} else
{{
var G__30090 = nval__30085;
var G__30091 = (n__30084 + 1);
val__30083 = G__30090;
n__30084 = G__30091;
continue;
}
}
} else
{return val__30083;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__30104 = arr.length;
if((arr.length === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__30105 = (arr[0]);
var n__30106 = 1;
while(true){
if((n__30106 < cnt__30104))
{var nval__30107 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__30105,(arr[n__30106])) : f.call(null,val__30105,(arr[n__30106])));
if(cljs.core.reduced_QMARK_(nval__30107))
{return cljs.core.deref(nval__30107);
} else
{{
var G__30116 = nval__30107;
var G__30117 = (n__30106 + 1);
val__30105 = G__30116;
n__30106 = G__30117;
continue;
}
}
} else
{return val__30105;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__30108 = arr.length;
var val__30109 = val;
var n__30110 = 0;
while(true){
if((n__30110 < cnt__30108))
{var nval__30111 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__30109,(arr[n__30110])) : f.call(null,val__30109,(arr[n__30110])));
if(cljs.core.reduced_QMARK_(nval__30111))
{return cljs.core.deref(nval__30111);
} else
{{
var G__30118 = nval__30111;
var G__30119 = (n__30110 + 1);
val__30109 = G__30118;
n__30110 = G__30119;
continue;
}
}
} else
{return val__30109;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__30112 = arr.length;
var val__30113 = val;
var n__30114 = idx;
while(true){
if((n__30114 < cnt__30112))
{var nval__30115 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__30113,(arr[n__30114])) : f.call(null,val__30113,(arr[n__30114])));
if(cljs.core.reduced_QMARK_(nval__30115))
{return cljs.core.deref(nval__30115);
} else
{{
var G__30120 = nval__30115;
var G__30121 = (n__30114 + 1);
val__30113 = G__30120;
n__30114 = G__30121;
continue;
}
}
} else
{return val__30113;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30122 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__30123 = this;
if(((this__30123.i + 1) < this__30123.a.length))
{return (new cljs.core.IndexedSeq(this__30123.a,(this__30123.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30124 = this;
return cljs.core.cons(o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__30125 = this;
var c__30126 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__30126 > 0))
{return (new cljs.core.RSeq(coll,(c__30126 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__30127 = this;
var this__30128 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__30128], 0));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__30129 = this;
if(cljs.core.counted_QMARK_(this__30129.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__30129.a,f,(this__30129.a[this__30129.i]),(this__30129.i + 1));
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__30129.a[this__30129.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__30130 = this;
if(cljs.core.counted_QMARK_(this__30130.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__30130.a,f,start,this__30130.i);
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__30131 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__30132 = this;
return (this__30132.a.length - this__30132.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__30133 = this;
return (this__30133.a[this__30133.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__30134 = this;
if(((this__30134.i + 1) < this__30134.a.length))
{return (new cljs.core.IndexedSeq(this__30134.a,(this__30134.i + 1)));
} else
{return cljs.core.list.cljs$lang$arity$0();
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30135 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__30136 = this;
var i__30137 = (n + this__30136.i);
if((i__30137 < this__30136.a.length))
{return (this__30136.a[i__30137]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__30138 = this;
var i__30139 = (n + this__30138.i);
if((i__30139 < this__30138.a.length))
{return (this__30138.a[i__30139]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$lang$arity$2(prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$lang$arity$2(array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$lang$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__30140 = null;
var G__30140__2 = (function (array,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(array,f);
});
var G__30140__3 = (function (array,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(array,f,start);
});
G__30140 = function(array,f,start){
switch(arguments.length){
case 2:
return G__30140__2.call(this,array,f);
case 3:
return G__30140__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30140;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__30141 = null;
var G__30141__2 = (function (array,k){
return (array[k]);
});
var G__30141__3 = (function (array,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(array,k,not_found);
});
G__30141 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__30141__2.call(this,array,k);
case 3:
return G__30141__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30141;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__30142 = null;
var G__30142__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__30142__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__30142 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__30142__2.call(this,array,n);
case 3:
return G__30142__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30142;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.cljs$lang$arity$2(array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30143 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30144 = this;
return cljs.core.cons(o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__30145 = this;
var this__30146 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__30146], 0));
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30147 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30148 = this;
return (this__30148.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30149 = this;
return cljs.core._nth.cljs$lang$arity$2(this__30149.ci,this__30149.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30150 = this;
if((this__30150.i > 0))
{return (new cljs.core.RSeq(this__30150.ci,(this__30150.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30151 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__30152 = this;
return (new cljs.core.RSeq(this__30152.ci,this__30152.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30153 = this;
return this__30153.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__30157__30158 = coll;
if(G__30157__30158)
{if((function (){var or__3939__auto____30159 = (G__30157__30158.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3939__auto____30159)
{return or__3939__auto____30159;
} else
{return G__30157__30158.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__30157__30158.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__30157__30158);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__30157__30158);
}
})())
{return coll;
} else
{return cljs.core._seq(coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__30164__30165 = coll;
if(G__30164__30165)
{if((function (){var or__3939__auto____30166 = (G__30164__30165.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____30166)
{return or__3939__auto____30166;
} else
{return G__30164__30165.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__30164__30165.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__30164__30165);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__30164__30165);
}
})())
{return cljs.core._first(coll);
} else
{var s__30167 = cljs.core.seq(coll);
if((s__30167 == null))
{return null;
} else
{return cljs.core._first(s__30167);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__30172__30173 = coll;
if(G__30172__30173)
{if((function (){var or__3939__auto____30174 = (G__30172__30173.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____30174)
{return or__3939__auto____30174;
} else
{return G__30172__30173.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__30172__30173.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__30172__30173);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__30172__30173);
}
})())
{return cljs.core._rest(coll);
} else
{var s__30175 = cljs.core.seq(coll);
if(!((s__30175 == null)))
{return cljs.core._rest(s__30175);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__30179__30180 = coll;
if(G__30179__30180)
{if((function (){var or__3939__auto____30181 = (G__30179__30180.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3939__auto____30181)
{return or__3939__auto____30181;
} else
{return G__30179__30180.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__30179__30180.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.INext,G__30179__30180);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.INext,G__30179__30180);
}
})())
{return cljs.core._next(coll);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__30183 = cljs.core.next(s);
if(!((sn__30183 == null)))
{{
var G__30184 = sn__30183;
s = G__30184;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj(coll,x);
});
var conj__3 = (function() { 
var G__30185__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__30186 = conj.cljs$lang$arity$2(coll,x);
var G__30187 = cljs.core.first(xs);
var G__30188 = cljs.core.next(xs);
coll = G__30186;
x = G__30187;
xs = G__30188;
continue;
}
} else
{return conj.cljs$lang$arity$2(coll,x);
}
break;
}
};
var G__30185 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30185__delegate.call(this, coll, x, xs);
};
G__30185.cljs$lang$maxFixedArity = 2;
G__30185.cljs$lang$applyTo = (function (arglist__30189){
var coll = cljs.core.first(arglist__30189);
var x = cljs.core.first(cljs.core.next(arglist__30189));
var xs = cljs.core.rest(cljs.core.next(arglist__30189));
return G__30185__delegate(coll, x, xs);
});
G__30185.cljs$lang$arity$variadic = G__30185__delegate;
return G__30185;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty(coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__30192 = cljs.core.seq(coll);
var acc__30193 = 0;
while(true){
if(cljs.core.counted_QMARK_(s__30192))
{return (acc__30193 + cljs.core._count(s__30192));
} else
{{
var G__30194 = cljs.core.next(s__30192);
var G__30195 = (acc__30193 + 1);
s__30192 = G__30194;
acc__30193 = G__30195;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_(coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$2(cljs.core.next(coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$3(cljs.core.next(coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__30202__30203 = coll;
if(G__30202__30203)
{if((function (){var or__3939__auto____30204 = (G__30202__30203.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____30204)
{return or__3939__auto____30204;
} else
{return G__30202__30203.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__30202__30203.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__30202__30203);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__30202__30203);
}
})())
{return cljs.core._nth.cljs$lang$arity$2(coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$2(coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__30205__30206 = coll;
if(G__30205__30206)
{if((function (){var or__3939__auto____30207 = (G__30205__30206.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____30207)
{return or__3939__auto____30207;
} else
{return G__30205__30206.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__30205__30206.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__30205__30206);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__30205__30206);
}
})())
{return cljs.core._nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.cljs$lang$arity$2(o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.cljs$lang$arity$3(o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc(coll,k,v);
});
var assoc__4 = (function() { 
var G__30210__delegate = function (coll,k,v,kvs){
while(true){
var ret__30209 = assoc.cljs$lang$arity$3(coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__30211 = ret__30209;
var G__30212 = cljs.core.first(kvs);
var G__30213 = cljs.core.second(kvs);
var G__30214 = cljs.core.nnext(kvs);
coll = G__30211;
k = G__30212;
v = G__30213;
kvs = G__30214;
continue;
}
} else
{return ret__30209;
}
break;
}
};
var G__30210 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30210__delegate.call(this, coll, k, v, kvs);
};
G__30210.cljs$lang$maxFixedArity = 3;
G__30210.cljs$lang$applyTo = (function (arglist__30215){
var coll = cljs.core.first(arglist__30215);
var k = cljs.core.first(cljs.core.next(arglist__30215));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30215)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30215)));
return G__30210__delegate(coll, k, v, kvs);
});
G__30210.cljs$lang$arity$variadic = G__30210__delegate;
return G__30210;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc(coll,k);
});
var dissoc__3 = (function() { 
var G__30218__delegate = function (coll,k,ks){
while(true){
var ret__30217 = dissoc.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__30219 = ret__30217;
var G__30220 = cljs.core.first(ks);
var G__30221 = cljs.core.next(ks);
coll = G__30219;
k = G__30220;
ks = G__30221;
continue;
}
} else
{return ret__30217;
}
break;
}
};
var G__30218 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30218__delegate.call(this, coll, k, ks);
};
G__30218.cljs$lang$maxFixedArity = 2;
G__30218.cljs$lang$applyTo = (function (arglist__30222){
var coll = cljs.core.first(arglist__30222);
var k = cljs.core.first(cljs.core.next(arglist__30222));
var ks = cljs.core.rest(cljs.core.next(arglist__30222));
return G__30218__delegate(coll, k, ks);
});
G__30218.cljs$lang$arity$variadic = G__30218__delegate;
return G__30218;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta(o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__30226__30227 = o;
if(G__30226__30227)
{if((function (){var or__3939__auto____30228 = (G__30226__30227.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3939__auto____30228)
{return or__3939__auto____30228;
} else
{return G__30226__30227.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__30226__30227.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__30226__30227);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__30226__30227);
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek(coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop(coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin(coll,k);
});
var disj__3 = (function() { 
var G__30231__delegate = function (coll,k,ks){
while(true){
var ret__30230 = disj.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__30232 = ret__30230;
var G__30233 = cljs.core.first(ks);
var G__30234 = cljs.core.next(ks);
coll = G__30232;
k = G__30233;
ks = G__30234;
continue;
}
} else
{return ret__30230;
}
break;
}
};
var G__30231 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30231__delegate.call(this, coll, k, ks);
};
G__30231.cljs$lang$maxFixedArity = 2;
G__30231.cljs$lang$applyTo = (function (arglist__30235){
var coll = cljs.core.first(arglist__30235);
var k = cljs.core.first(cljs.core.next(arglist__30235));
var ks = cljs.core.rest(cljs.core.next(arglist__30235));
return G__30231__delegate(coll, k, ks);
});
G__30231.cljs$lang$arity$variadic = G__30231__delegate;
return G__30231;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__30237 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__30237);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__30237;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__30239 = (cljs.core.string_hash_cache[k]);
if(!((h__30239 == null)))
{return h__30239;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.cljs$lang$arity$2(o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3937__auto____30241 = goog.isString(o);
if(and__3937__auto____30241)
{return check_cache;
} else
{return and__3937__auto____30241;
}
})())
{return cljs.core.check_string_hash_cache(o);
} else
{return cljs.core._hash(o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not(cljs.core.seq(coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__30245__30246 = x;
if(G__30245__30246)
{if((function (){var or__3939__auto____30247 = (G__30245__30246.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3939__auto____30247)
{return or__3939__auto____30247;
} else
{return G__30245__30246.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__30245__30246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__30245__30246);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__30245__30246);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__30251__30252 = x;
if(G__30251__30252)
{if((function (){var or__3939__auto____30253 = (G__30251__30252.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3939__auto____30253)
{return or__3939__auto____30253;
} else
{return G__30251__30252.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__30251__30252.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISet,G__30251__30252);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISet,G__30251__30252);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__30257__30258 = x;
if(G__30257__30258)
{if((function (){var or__3939__auto____30259 = (G__30257__30258.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3939__auto____30259)
{return or__3939__auto____30259;
} else
{return G__30257__30258.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__30257__30258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__30257__30258);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__30257__30258);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__30263__30264 = x;
if(G__30263__30264)
{if((function (){var or__3939__auto____30265 = (G__30263__30264.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3939__auto____30265)
{return or__3939__auto____30265;
} else
{return G__30263__30264.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__30263__30264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__30263__30264);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__30263__30264);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__30269__30270 = x;
if(G__30269__30270)
{if((function (){var or__3939__auto____30271 = (G__30269__30270.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3939__auto____30271)
{return or__3939__auto____30271;
} else
{return G__30269__30270.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__30269__30270.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__30269__30270);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__30269__30270);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__30275__30276 = x;
if(G__30275__30276)
{if((function (){var or__3939__auto____30277 = (G__30275__30276.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____30277)
{return or__3939__auto____30277;
} else
{return G__30275__30276.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__30275__30276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__30275__30276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__30275__30276);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__30281__30282 = x;
if(G__30281__30282)
{if((function (){var or__3939__auto____30283 = (G__30281__30282.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____30283)
{return or__3939__auto____30283;
} else
{return G__30281__30282.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__30281__30282.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__30281__30282);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__30281__30282);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__30287__30288 = x;
if(G__30287__30288)
{if((function (){var or__3939__auto____30289 = (G__30287__30288.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3939__auto____30289)
{return or__3939__auto____30289;
} else
{return G__30287__30288.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__30287__30288.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMap,G__30287__30288);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMap,G__30287__30288);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__30293__30294 = x;
if(G__30293__30294)
{if((function (){var or__3939__auto____30295 = (G__30293__30294.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3939__auto____30295)
{return or__3939__auto____30295;
} else
{return G__30293__30294.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__30293__30294.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IVector,G__30293__30294);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IVector,G__30293__30294);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__30299__30300 = x;
if(G__30299__30300)
{if(cljs.core.truth_((function (){var or__3939__auto____30301 = null;
if(cljs.core.truth_(or__3939__auto____30301))
{return or__3939__auto____30301;
} else
{return G__30299__30300.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__30299__30300.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__30299__30300);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__30299__30300);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__30302__delegate = function (keyvals){
return cljs.core.apply.cljs$lang$arity$2(goog.object.create,keyvals);
};
var G__30302 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30302__delegate.call(this, keyvals);
};
G__30302.cljs$lang$maxFixedArity = 0;
G__30302.cljs$lang$applyTo = (function (arglist__30303){
var keyvals = cljs.core.seq(arglist__30303);;
return G__30302__delegate(keyvals);
});
G__30302.cljs$lang$arity$variadic = G__30302__delegate;
return G__30302;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__30305 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__30305.push(key);
}));
return keys__30305;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__30309 = i;
var j__30310 = j;
var len__30311 = len;
while(true){
if((len__30311 === 0))
{return to;
} else
{(to[j__30310] = (from[i__30309]));
{
var G__30312 = (i__30309 + 1);
var G__30313 = (j__30310 + 1);
var G__30314 = (len__30311 - 1);
i__30309 = G__30312;
j__30310 = G__30313;
len__30311 = G__30314;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__30318 = (i + (len - 1));
var j__30319 = (j + (len - 1));
var len__30320 = len;
while(true){
if((len__30320 === 0))
{return to;
} else
{(to[j__30319] = (from[i__30318]));
{
var G__30321 = (i__30318 - 1);
var G__30322 = (j__30319 - 1);
var G__30323 = (len__30320 - 1);
i__30318 = G__30321;
j__30319 = G__30322;
len__30320 = G__30323;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__30327__30328 = s;
if(G__30327__30328)
{if((function (){var or__3939__auto____30329 = (G__30327__30328.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____30329)
{return or__3939__auto____30329;
} else
{return G__30327__30328.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__30327__30328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__30327__30328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__30327__30328);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__30333__30334 = s;
if(G__30333__30334)
{if((function (){var or__3939__auto____30335 = (G__30333__30334.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3939__auto____30335)
{return or__3939__auto____30335;
} else
{return G__30333__30334.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__30333__30334.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__30333__30334);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__30333__30334);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3937__auto____30338 = goog.isString(x);
if(and__3937__auto____30338)
{return !((function (){var or__3939__auto____30339 = (x.charAt(0) === "\uFDD0");
if(or__3939__auto____30339)
{return or__3939__auto____30339;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3937__auto____30338;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3937__auto____30341 = goog.isString(x);
if(and__3937__auto____30341)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3937__auto____30341;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3937__auto____30343 = goog.isString(x);
if(and__3937__auto____30343)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3937__auto____30343;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3939__auto____30348 = cljs.core.fn_QMARK_(f);
if(or__3939__auto____30348)
{return or__3939__auto____30348;
} else
{var G__30349__30350 = f;
if(G__30349__30350)
{if((function (){var or__3939__auto____30351 = (G__30349__30350.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3939__auto____30351)
{return or__3939__auto____30351;
} else
{return G__30349__30350.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__30349__30350.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IFn,G__30349__30350);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IFn,G__30349__30350);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3937__auto____30353 = cljs.core.number_QMARK_(n);
if(and__3937__auto____30353)
{return (n == n.toFixed());
} else
{return and__3937__auto____30353;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.cljs$lang$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3937__auto____30356 = coll;
if(cljs.core.truth_(and__3937__auto____30356))
{var and__3937__auto____30357 = cljs.core.associative_QMARK_(coll);
if(and__3937__auto____30357)
{return cljs.core.contains_QMARK_(coll,k);
} else
{return and__3937__auto____30357;
}
} else
{return and__3937__auto____30356;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.cljs$lang$arity$2(coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__30366__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$lang$arity$2(x,y)))
{var s__30362 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__30363 = more;
while(true){
var x__30364 = cljs.core.first(xs__30363);
var etc__30365 = cljs.core.next(xs__30363);
if(cljs.core.truth_(xs__30363))
{if(cljs.core.contains_QMARK_(s__30362,x__30364))
{return false;
} else
{{
var G__30367 = cljs.core.conj.cljs$lang$arity$2(s__30362,x__30364);
var G__30368 = etc__30365;
s__30362 = G__30367;
xs__30363 = G__30368;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__30366 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30366__delegate.call(this, x, y, more);
};
G__30366.cljs$lang$maxFixedArity = 2;
G__30366.cljs$lang$applyTo = (function (arglist__30369){
var x = cljs.core.first(arglist__30369);
var y = cljs.core.first(cljs.core.next(arglist__30369));
var more = cljs.core.rest(cljs.core.next(arglist__30369));
return G__30366__delegate(x, y, more);
});
G__30366.cljs$lang$arity$variadic = G__30366__delegate;
return G__30366;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__30373__30374 = x;
if(G__30373__30374)
{if(cljs.core.truth_((function (){var or__3939__auto____30375 = null;
if(cljs.core.truth_(or__3939__auto____30375))
{return or__3939__auto____30375;
} else
{return G__30373__30374.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__30373__30374.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__30373__30374);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__30373__30374);
}
})())
{return cljs.core._compare(x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__30380 = cljs.core.count(xs);
var yl__30381 = cljs.core.count(ys);
if((xl__30380 < yl__30381))
{return -1;
} else
{if((xl__30380 > yl__30381))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.cljs$lang$arity$4(xs,ys,xl__30380,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__30382 = cljs.core.compare(cljs.core.nth.cljs$lang$arity$2(xs,n),cljs.core.nth.cljs$lang$arity$2(ys,n));
if((function (){var and__3937__auto____30383 = (d__30382 === 0);
if(and__3937__auto____30383)
{return ((n + 1) < len);
} else
{return and__3937__auto____30383;
}
})())
{{
var G__30384 = xs;
var G__30385 = ys;
var G__30386 = len;
var G__30387 = (n + 1);
xs = G__30384;
ys = G__30385;
len = G__30386;
n = G__30387;
continue;
}
} else
{return d__30382;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$lang$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__30389 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y));
if(cljs.core.number_QMARK_(r__30389))
{return r__30389;
} else
{if(cljs.core.truth_(r__30389))
{return -1;
} else
{if(cljs.core.truth_((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(y,x) : f.call(null,y,x))))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$lang$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll))
{var a__30391 = cljs.core.to_array(coll);
goog.array.stableSort(a__30391,cljs.core.fn__GT_comparator(comp));
return cljs.core.seq(a__30391);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$lang$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$lang$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(y) : keyfn.call(null,y)));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4086__auto____30397 = cljs.core.seq(coll);
if(temp__4086__auto____30397)
{var s__30398 = temp__4086__auto____30397;
return cljs.core.reduce.cljs$lang$arity$3(f,cljs.core.first(s__30398),cljs.core.next(s__30398));
} else
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__30399 = val;
var coll__30400 = cljs.core.seq(coll);
while(true){
if(coll__30400)
{var nval__30401 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__30399,cljs.core.first(coll__30400)) : f.call(null,val__30399,cljs.core.first(coll__30400)));
if(cljs.core.reduced_QMARK_(nval__30401))
{return cljs.core.deref(nval__30401);
} else
{{
var G__30402 = nval__30401;
var G__30403 = cljs.core.next(coll__30400);
val__30399 = G__30402;
coll__30400 = G__30403;
continue;
}
}
} else
{return val__30399;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__30405 = cljs.core.to_array(coll);
goog.array.shuffle(a__30405);
return cljs.core.vec(a__30405);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__30412__30413 = coll;
if(G__30412__30413)
{if((function (){var or__3939__auto____30414 = (G__30412__30413.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____30414)
{return or__3939__auto____30414;
} else
{return G__30412__30413.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__30412__30413.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__30412__30413);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__30412__30413);
}
})())
{return cljs.core._reduce.cljs$lang$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$2(f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__30415__30416 = coll;
if(G__30415__30416)
{if((function (){var or__3939__auto____30417 = (G__30415__30416.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____30417)
{return or__3939__auto____30417;
} else
{return G__30415__30416.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__30415__30416.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__30415__30416);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__30415__30416);
}
})())
{return cljs.core._reduce.cljs$lang$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$3(f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce(coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__30418 = this;
return this__30418.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_(cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__30419__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_PLUS_,(x + y),more);
};
var G__30419 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30419__delegate.call(this, x, y, more);
};
G__30419.cljs$lang$maxFixedArity = 2;
G__30419.cljs$lang$applyTo = (function (arglist__30420){
var x = cljs.core.first(arglist__30420);
var y = cljs.core.first(cljs.core.next(arglist__30420));
var more = cljs.core.rest(cljs.core.next(arglist__30420));
return G__30419__delegate(x, y, more);
});
G__30419.cljs$lang$arity$variadic = G__30419__delegate;
return G__30419;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__30421__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_,(x - y),more);
};
var G__30421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30421__delegate.call(this, x, y, more);
};
G__30421.cljs$lang$maxFixedArity = 2;
G__30421.cljs$lang$applyTo = (function (arglist__30422){
var x = cljs.core.first(arglist__30422);
var y = cljs.core.first(cljs.core.next(arglist__30422));
var more = cljs.core.rest(cljs.core.next(arglist__30422));
return G__30421__delegate(x, y, more);
});
G__30421.cljs$lang$arity$variadic = G__30421__delegate;
return G__30421;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__30423__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_STAR_,(x * y),more);
};
var G__30423 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30423__delegate.call(this, x, y, more);
};
G__30423.cljs$lang$maxFixedArity = 2;
G__30423.cljs$lang$applyTo = (function (arglist__30424){
var x = cljs.core.first(arglist__30424);
var y = cljs.core.first(cljs.core.next(arglist__30424));
var more = cljs.core.rest(cljs.core.next(arglist__30424));
return G__30423__delegate(x, y, more);
});
G__30423.cljs$lang$arity$variadic = G__30423__delegate;
return G__30423;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$lang$arity$2(1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__30425__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_SLASH_,_SLASH_.cljs$lang$arity$2(x,y),more);
};
var G__30425 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30425__delegate.call(this, x, y, more);
};
G__30425.cljs$lang$maxFixedArity = 2;
G__30425.cljs$lang$applyTo = (function (arglist__30426){
var x = cljs.core.first(arglist__30426);
var y = cljs.core.first(cljs.core.next(arglist__30426));
var more = cljs.core.rest(cljs.core.next(arglist__30426));
return G__30425__delegate(x, y, more);
});
G__30425.cljs$lang$arity$variadic = G__30425__delegate;
return G__30425;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__30427__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__30428 = y;
var G__30429 = cljs.core.first(more);
var G__30430 = cljs.core.next(more);
x = G__30428;
y = G__30429;
more = G__30430;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__30427 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30427__delegate.call(this, x, y, more);
};
G__30427.cljs$lang$maxFixedArity = 2;
G__30427.cljs$lang$applyTo = (function (arglist__30431){
var x = cljs.core.first(arglist__30431);
var y = cljs.core.first(cljs.core.next(arglist__30431));
var more = cljs.core.rest(cljs.core.next(arglist__30431));
return G__30427__delegate(x, y, more);
});
G__30427.cljs$lang$arity$variadic = G__30427__delegate;
return G__30427;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__30432__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__30433 = y;
var G__30434 = cljs.core.first(more);
var G__30435 = cljs.core.next(more);
x = G__30433;
y = G__30434;
more = G__30435;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__30432 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30432__delegate.call(this, x, y, more);
};
G__30432.cljs$lang$maxFixedArity = 2;
G__30432.cljs$lang$applyTo = (function (arglist__30436){
var x = cljs.core.first(arglist__30436);
var y = cljs.core.first(cljs.core.next(arglist__30436));
var more = cljs.core.rest(cljs.core.next(arglist__30436));
return G__30432__delegate(x, y, more);
});
G__30432.cljs$lang$arity$variadic = G__30432__delegate;
return G__30432;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__30437__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__30438 = y;
var G__30439 = cljs.core.first(more);
var G__30440 = cljs.core.next(more);
x = G__30438;
y = G__30439;
more = G__30440;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__30437 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30437__delegate.call(this, x, y, more);
};
G__30437.cljs$lang$maxFixedArity = 2;
G__30437.cljs$lang$applyTo = (function (arglist__30441){
var x = cljs.core.first(arglist__30441);
var y = cljs.core.first(cljs.core.next(arglist__30441));
var more = cljs.core.rest(cljs.core.next(arglist__30441));
return G__30437__delegate(x, y, more);
});
G__30437.cljs$lang$arity$variadic = G__30437__delegate;
return G__30437;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__30442__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__30443 = y;
var G__30444 = cljs.core.first(more);
var G__30445 = cljs.core.next(more);
x = G__30443;
y = G__30444;
more = G__30445;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__30442 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30442__delegate.call(this, x, y, more);
};
G__30442.cljs$lang$maxFixedArity = 2;
G__30442.cljs$lang$applyTo = (function (arglist__30446){
var x = cljs.core.first(arglist__30446);
var y = cljs.core.first(cljs.core.next(arglist__30446));
var more = cljs.core.rest(cljs.core.next(arglist__30446));
return G__30442__delegate(x, y, more);
});
G__30442.cljs$lang$arity$variadic = G__30442__delegate;
return G__30442;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__30447__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(max,((x > y) ? x : y),more);
};
var G__30447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30447__delegate.call(this, x, y, more);
};
G__30447.cljs$lang$maxFixedArity = 2;
G__30447.cljs$lang$applyTo = (function (arglist__30448){
var x = cljs.core.first(arglist__30448);
var y = cljs.core.first(cljs.core.next(arglist__30448));
var more = cljs.core.rest(cljs.core.next(arglist__30448));
return G__30447__delegate(x, y, more);
});
G__30447.cljs$lang$arity$variadic = G__30447__delegate;
return G__30447;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__30449__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(min,((x < y) ? x : y),more);
};
var G__30449 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30449__delegate.call(this, x, y, more);
};
G__30449.cljs$lang$maxFixedArity = 2;
G__30449.cljs$lang$applyTo = (function (arglist__30450){
var x = cljs.core.first(arglist__30450);
var y = cljs.core.first(cljs.core.next(arglist__30450));
var more = cljs.core.rest(cljs.core.next(arglist__30450));
return G__30449__delegate(x, y, more);
});
G__30449.cljs$lang$arity$variadic = G__30449__delegate;
return G__30449;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(q) : Math.floor.call(null,q));
} else
{return (Math.ceil.cljs$lang$arity$1 ? Math.ceil.cljs$lang$arity$1(q) : Math.ceil.call(null,q));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__30452 = (n % d);
return cljs.core.fix(((n - rem__30452) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__30454 = cljs.core.quot(n,d);
return (n - (d * q__30454));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$lang$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$lang$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__30457 = (v - ((v >> 1) & 1431655765));
var v__30458 = ((v__30457 & 858993459) + ((v__30457 >> 2) & 858993459));
return ((((v__30458 + (v__30458 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__30459__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__30460 = y;
var G__30461 = cljs.core.first(more);
var G__30462 = cljs.core.next(more);
x = G__30460;
y = G__30461;
more = G__30462;
continue;
}
} else
{return _EQ__EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__30459 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30459__delegate.call(this, x, y, more);
};
G__30459.cljs$lang$maxFixedArity = 2;
G__30459.cljs$lang$applyTo = (function (arglist__30463){
var x = cljs.core.first(arglist__30463);
var y = cljs.core.first(cljs.core.next(arglist__30463));
var more = cljs.core.rest(cljs.core.next(arglist__30463));
return G__30459__delegate(x, y, more);
});
G__30459.cljs$lang$arity$variadic = G__30459__delegate;
return G__30459;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__30467 = n;
var xs__30468 = cljs.core.seq(coll);
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____30469 = xs__30468;
if(and__3937__auto____30469)
{return (n__30467 > 0);
} else
{return and__3937__auto____30469;
}
})()))
{{
var G__30470 = (n__30467 - 1);
var G__30471 = cljs.core.next(xs__30468);
n__30467 = G__30470;
xs__30468 = G__30471;
continue;
}
} else
{return xs__30468;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__30472__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__30473 = sb.append(str_STAR_.cljs$lang$arity$1(cljs.core.first(more)));
var G__30474 = cljs.core.next(more);
sb = G__30473;
more = G__30474;
continue;
}
} else
{return str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.cljs$lang$arity$1(x))),ys);
};
var G__30472 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__30472__delegate.call(this, x, ys);
};
G__30472.cljs$lang$maxFixedArity = 1;
G__30472.cljs$lang$applyTo = (function (arglist__30475){
var x = cljs.core.first(arglist__30475);
var ys = cljs.core.rest(arglist__30475);
return G__30472__delegate(x, ys);
});
G__30472.cljs$lang$arity$variadic = G__30472__delegate;
return G__30472;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_(x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_(x))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic(":",cljs.core.array_seq([x.substring(2,x.length)], 0));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__30476__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__30477 = sb.append(str.cljs$lang$arity$1(cljs.core.first(more)));
var G__30478 = cljs.core.next(more);
sb = G__30477;
more = G__30478;
continue;
}
} else
{return cljs.core.str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.cljs$lang$arity$1(x))),ys);
};
var G__30476 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__30476__delegate.call(this, x, ys);
};
G__30476.cljs$lang$maxFixedArity = 1;
G__30476.cljs$lang$applyTo = (function (arglist__30479){
var x = cljs.core.first(arglist__30479);
var ys = cljs.core.rest(arglist__30479);
return G__30476__delegate(x, ys);
});
G__30476.cljs$lang$arity$variadic = G__30476__delegate;
return G__30476;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.cljs$lang$arity$3(goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__30480){
var fmt = cljs.core.first(arglist__30480);
var args = cljs.core.rest(arglist__30480);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_(name))
{name;
} else
{if(cljs.core.keyword_QMARK_(name))
{cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{}
}
return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",name], 0));
});
var symbol__2 = (function (ns,name){
return symbol.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_(name))
{return name;
} else
{if(cljs.core.symbol_QMARK_(name))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",name], 0));
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(function (){var xs__30483 = cljs.core.seq(x);
var ys__30484 = cljs.core.seq(y);
while(true){
if((xs__30483 == null))
{return (ys__30484 == null);
} else
{if((ys__30484 == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(xs__30483),cljs.core.first(ys__30484)))
{{
var G__30485 = cljs.core.next(xs__30483);
var G__30486 = cljs.core.next(ys__30484);
xs__30483 = G__30485;
ys__30484 = G__30486;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__30487_SHARP_,p2__30488_SHARP_){
return cljs.core.hash_combine(p1__30487_SHARP_,cljs.core.hash.cljs$lang$arity$2(p2__30488_SHARP_,false));
}),cljs.core.hash.cljs$lang$arity$2(cljs.core.first(coll),false),cljs.core.next(coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__30492 = 0;
var s__30493 = cljs.core.seq(m);
while(true){
if(s__30493)
{var e__30494 = cljs.core.first(s__30493);
{
var G__30495 = ((h__30492 + (cljs.core.hash.cljs$lang$arity$1(cljs.core.key(e__30494)) ^ cljs.core.hash.cljs$lang$arity$1(cljs.core.val(e__30494)))) % 4503599627370496);
var G__30496 = cljs.core.next(s__30493);
h__30492 = G__30495;
s__30493 = G__30496;
continue;
}
} else
{return h__30492;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__30500 = 0;
var s__30501 = cljs.core.seq(s);
while(true){
if(s__30501)
{var e__30502 = cljs.core.first(s__30501);
{
var G__30503 = ((h__30500 + cljs.core.hash.cljs$lang$arity$1(e__30502)) % 4503599627370496);
var G__30504 = cljs.core.next(s__30501);
h__30500 = G__30503;
s__30501 = G__30504;
continue;
}
} else
{return h__30500;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__30525__30526 = cljs.core.seq(fn_map);
if(G__30525__30526)
{var G__30528__30530 = cljs.core.first(G__30525__30526);
var vec__30529__30531 = G__30528__30530;
var key_name__30532 = cljs.core.nth.cljs$lang$arity$3(vec__30529__30531,0,null);
var f__30533 = cljs.core.nth.cljs$lang$arity$3(vec__30529__30531,1,null);
var G__30525__30534 = G__30525__30526;
var G__30528__30535 = G__30528__30530;
var G__30525__30536 = G__30525__30534;
while(true){
var vec__30537__30538 = G__30528__30535;
var key_name__30539 = cljs.core.nth.cljs$lang$arity$3(vec__30537__30538,0,null);
var f__30540 = cljs.core.nth.cljs$lang$arity$3(vec__30537__30538,1,null);
var G__30525__30541 = G__30525__30536;
var str_name__30542 = cljs.core.name(key_name__30539);
(obj[str_name__30542] = f__30540);
var temp__4088__auto____30543 = cljs.core.next(G__30525__30541);
if(temp__4088__auto____30543)
{var G__30525__30544 = temp__4088__auto____30543;
{
var G__30545 = cljs.core.first(G__30525__30544);
var G__30546 = G__30525__30544;
G__30528__30535 = G__30545;
G__30525__30536 = G__30546;
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
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30547 = this;
var h__2225__auto____30548 = this__30547.__hash;
if(!((h__2225__auto____30548 == null)))
{return h__2225__auto____30548;
} else
{var h__2225__auto____30549 = cljs.core.hash_coll(coll);
this__30547.__hash = h__2225__auto____30549;
return h__2225__auto____30549;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__30550 = this;
if((this__30550.count === 1))
{return null;
} else
{return this__30550.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30551 = this;
return (new cljs.core.List(this__30551.meta,o,coll,(this__30551.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__30552 = this;
var this__30553 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__30553], 0));
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30554 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30555 = this;
return this__30555.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__30556 = this;
return this__30556.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__30557 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30558 = this;
return this__30558.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30559 = this;
if((this__30559.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__30559.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30560 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30561 = this;
return (new cljs.core.List(meta,this__30561.first,this__30561.rest,this__30561.count,this__30561.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30562 = this;
return this__30562.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30563 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30564 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__30565 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30566 = this;
return (new cljs.core.List(this__30566.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__30567 = this;
var this__30568 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__30568], 0));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30569 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30570 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__30571 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__30572 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30573 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30574 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30575 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30576 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30577 = this;
return this__30577.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30578 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__30582__30583 = coll;
if(G__30582__30583)
{if((function (){var or__3939__auto____30584 = (G__30582__30583.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3939__auto____30584)
{return or__3939__auto____30584;
} else
{return G__30582__30583.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__30582__30583.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__30582__30583);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__30582__30583);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$1(y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$2(y,z),x);
});
var list__4 = (function() { 
var G__30585__delegate = function (x,y,z,items){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse(items)),z),y),x);
};
var G__30585 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30585__delegate.call(this, x, y, z, items);
};
G__30585.cljs$lang$maxFixedArity = 3;
G__30585.cljs$lang$applyTo = (function (arglist__30586){
var x = cljs.core.first(arglist__30586);
var y = cljs.core.first(cljs.core.next(arglist__30586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30586)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30586)));
return G__30585__delegate(x, y, z, items);
});
G__30585.cljs$lang$arity$variadic = G__30585__delegate;
return G__30585;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30587 = this;
var h__2225__auto____30588 = this__30587.__hash;
if(!((h__2225__auto____30588 == null)))
{return h__2225__auto____30588;
} else
{var h__2225__auto____30589 = cljs.core.hash_coll(coll);
this__30587.__hash = h__2225__auto____30589;
return h__2225__auto____30589;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__30590 = this;
if((this__30590.rest == null))
{return null;
} else
{return cljs.core._seq(this__30590.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30591 = this;
return (new cljs.core.Cons(null,o,coll,this__30591.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__30592 = this;
var this__30593 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__30593], 0));
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30594 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30595 = this;
return this__30595.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30596 = this;
if((this__30596.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__30596.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30597 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30598 = this;
return (new cljs.core.Cons(meta,this__30598.first,this__30598.rest,this__30598.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30599 = this;
return this__30599.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30600 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__30600.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3939__auto____30605 = (coll == null);
if(or__3939__auto____30605)
{return or__3939__auto____30605;
} else
{var G__30606__30607 = coll;
if(G__30606__30607)
{if((function (){var or__3939__auto____30608 = (G__30606__30607.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____30608)
{return or__3939__auto____30608;
} else
{return G__30606__30607.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__30606__30607.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__30606__30607);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__30606__30607);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__30612__30613 = x;
if(G__30612__30613)
{if((function (){var or__3939__auto____30614 = (G__30612__30613.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3939__auto____30614)
{return or__3939__auto____30614;
} else
{return G__30612__30613.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__30612__30613.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IList,G__30612__30613);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IList,G__30612__30613);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__30615 = null;
var G__30615__2 = (function (string,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(string,f);
});
var G__30615__3 = (function (string,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(string,f,start);
});
G__30615 = function(string,f,start){
switch(arguments.length){
case 2:
return G__30615__2.call(this,string,f);
case 3:
return G__30615__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30615;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__30616 = null;
var G__30616__2 = (function (string,k){
return cljs.core._nth.cljs$lang$arity$2(string,k);
});
var G__30616__3 = (function (string,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(string,k,not_found);
});
G__30616 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__30616__2.call(this,string,k);
case 3:
return G__30616__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30616;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__30617 = null;
var G__30617__2 = (function (string,n){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__30617__3 = (function (string,n,not_found){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__30617 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__30617__2.call(this,string,n);
case 3:
return G__30617__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30617;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.cljs$lang$arity$2(string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__30629 = null;
var G__30629__2 = (function (this_sym30620,coll){
var this__30622 = this;
var this_sym30620__30623 = this;
var ___30624 = this_sym30620__30623;
if((coll == null))
{return null;
} else
{var strobj__30625 = coll.strobj;
if((strobj__30625 == null))
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__30622.k,null);
} else
{return (strobj__30625[this__30622.k]);
}
}
});
var G__30629__3 = (function (this_sym30621,coll,not_found){
var this__30622 = this;
var this_sym30621__30626 = this;
var ___30627 = this_sym30621__30626;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__30622.k,not_found);
}
});
G__30629 = function(this_sym30621,coll,not_found){
switch(arguments.length){
case 2:
return G__30629__2.call(this,this_sym30621,coll);
case 3:
return G__30629__3.call(this,this_sym30621,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30629;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym30618,args30619){
var this__30628 = this;
return this_sym30618.call.apply(this_sym30618,[this_sym30618].concat(args30619.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__30638 = null;
var G__30638__2 = (function (this_sym30632,coll){
var this_sym30632__30634 = this;
var this__30635 = this_sym30632__30634;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__30635.toString(),null);
});
var G__30638__3 = (function (this_sym30633,coll,not_found){
var this_sym30633__30636 = this;
var this__30637 = this_sym30633__30636;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__30637.toString(),not_found);
});
G__30638 = function(this_sym30633,coll,not_found){
switch(arguments.length){
case 2:
return G__30638__2.call(this,this_sym30633,coll);
case 3:
return G__30638__3.call(this,this_sym30633,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30638;
})()
;
String.prototype.apply = (function (this_sym30630,args30631){
return this_sym30630.call.apply(this_sym30630,[this_sym30630].concat(args30631.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count(args) < 2))
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,null);
} else
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__30640 = lazy_seq.x;
if(lazy_seq.realized)
{return x__30640;
} else
{lazy_seq.x = (x__30640.cljs$lang$arity$0 ? x__30640.cljs$lang$arity$0() : x__30640.call(null));
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30641 = this;
var h__2225__auto____30642 = this__30641.__hash;
if(!((h__2225__auto____30642 == null)))
{return h__2225__auto____30642;
} else
{var h__2225__auto____30643 = cljs.core.hash_coll(coll);
this__30641.__hash = h__2225__auto____30643;
return h__2225__auto____30643;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__30644 = this;
return cljs.core._seq(coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30645 = this;
return cljs.core.cons(o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__30646 = this;
var this__30647 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__30647], 0));
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30648 = this;
return cljs.core.seq(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30649 = this;
return cljs.core.first(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30650 = this;
return cljs.core.rest(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30651 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30652 = this;
return (new cljs.core.LazySeq(meta,this__30652.realized,this__30652.x,this__30652.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30653 = this;
return this__30653.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30654 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__30654.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__30655 = this;
return this__30655.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__30656 = this;
var ___30657 = this;
(this__30656.buf[this__30656.end] = o);
return this__30656.end = (this__30656.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__30658 = this;
var ___30659 = this;
var ret__30660 = (new cljs.core.ArrayChunk(this__30658.buf,0,this__30658.end));
this__30658.buf = null;
return ret__30660;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.cljs$lang$arity$1(capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__30661 = this;
return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__30661.arr[this__30661.off]),(this__30661.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__30662 = this;
return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,this__30662.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__30663 = this;
if((this__30663.off === this__30663.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__30663.arr,(this__30663.off + 1),this__30663.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__30664 = this;
return (this__30664.arr[(this__30664.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__30665 = this;
if((function (){var and__3937__auto____30666 = (i >= 0);
if(and__3937__auto____30666)
{return (i < (this__30665.end - this__30665.off));
} else
{return and__3937__auto____30666;
}
})())
{return (this__30665.arr[(this__30665.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__30667 = this;
return (this__30667.end - this__30667.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.cljs$lang$arity$3(arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.cljs$lang$arity$3(arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__30668 = this;
return cljs.core.cons(o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30669 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30670 = this;
return cljs.core._nth.cljs$lang$arity$2(this__30670.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30671 = this;
if((cljs.core._count(this__30671.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(this__30671.chunk),this__30671.more,this__30671.meta));
} else
{if((this__30671.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__30671.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__30672 = this;
if((this__30672.more == null))
{return null;
} else
{return this__30672.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30673 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__30674 = this;
return (new cljs.core.ChunkedCons(this__30674.chunk,this__30674.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30675 = this;
return this__30675.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__30676 = this;
return this__30676.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__30677 = this;
if((this__30677.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__30677.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__30681__30682 = s;
if(G__30681__30682)
{if(cljs.core.truth_((function (){var or__3939__auto____30683 = null;
if(cljs.core.truth_(or__3939__auto____30683))
{return or__3939__auto____30683;
} else
{return G__30681__30682.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__30681__30682.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__30681__30682);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__30681__30682);
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__30686 = [];
var s__30687 = s;
while(true){
if(cljs.core.seq(s__30687))
{ary__30686.push(cljs.core.first(s__30687));
{
var G__30688 = cljs.core.next(s__30687);
s__30687 = G__30688;
continue;
}
} else
{return ary__30686;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__30692 = cljs.core.make_array.cljs$lang$arity$1(cljs.core.count(coll));
var i__30693 = 0;
var xs__30694 = cljs.core.seq(coll);
while(true){
if(xs__30694)
{(ret__30692[i__30693] = cljs.core.to_array(cljs.core.first(xs__30694)));
{
var G__30695 = (i__30693 + 1);
var G__30696 = cljs.core.next(xs__30694);
i__30693 = G__30695;
xs__30694 = G__30696;
continue;
}
} else
{}
break;
}
return ret__30692;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return long_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__30704 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__30705 = cljs.core.seq(init_val_or_seq);
var i__30706 = 0;
var s__30707 = s__30705;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____30708 = s__30707;
if(and__3937__auto____30708)
{return (i__30706 < size);
} else
{return and__3937__auto____30708;
}
})()))
{(a__30704[i__30706] = cljs.core.first(s__30707));
{
var G__30711 = (i__30706 + 1);
var G__30712 = cljs.core.next(s__30707);
i__30706 = G__30711;
s__30707 = G__30712;
continue;
}
} else
{return a__30704;
}
break;
}
} else
{var n__2560__auto____30709 = size;
var i__30710 = 0;
while(true){
if((i__30710 < n__2560__auto____30709))
{(a__30704[i__30710] = init_val_or_seq);
{
var G__30713 = (i__30710 + 1);
i__30710 = G__30713;
continue;
}
} else
{}
break;
}
return a__30704;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return double_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__30721 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__30722 = cljs.core.seq(init_val_or_seq);
var i__30723 = 0;
var s__30724 = s__30722;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____30725 = s__30724;
if(and__3937__auto____30725)
{return (i__30723 < size);
} else
{return and__3937__auto____30725;
}
})()))
{(a__30721[i__30723] = cljs.core.first(s__30724));
{
var G__30728 = (i__30723 + 1);
var G__30729 = cljs.core.next(s__30724);
i__30723 = G__30728;
s__30724 = G__30729;
continue;
}
} else
{return a__30721;
}
break;
}
} else
{var n__2560__auto____30726 = size;
var i__30727 = 0;
while(true){
if((i__30727 < n__2560__auto____30726))
{(a__30721[i__30727] = init_val_or_seq);
{
var G__30730 = (i__30727 + 1);
i__30727 = G__30730;
continue;
}
} else
{}
break;
}
return a__30721;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return object_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__30738 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__30739 = cljs.core.seq(init_val_or_seq);
var i__30740 = 0;
var s__30741 = s__30739;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____30742 = s__30741;
if(and__3937__auto____30742)
{return (i__30740 < size);
} else
{return and__3937__auto____30742;
}
})()))
{(a__30738[i__30740] = cljs.core.first(s__30741));
{
var G__30745 = (i__30740 + 1);
var G__30746 = cljs.core.next(s__30741);
i__30740 = G__30745;
s__30741 = G__30746;
continue;
}
} else
{return a__30738;
}
break;
}
} else
{var n__2560__auto____30743 = size;
var i__30744 = 0;
while(true){
if((i__30744 < n__2560__auto____30743))
{(a__30738[i__30744] = init_val_or_seq);
{
var G__30747 = (i__30744 + 1);
i__30744 = G__30747;
continue;
}
} else
{}
break;
}
return a__30738;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__30752 = s;
var i__30753 = n;
var sum__30754 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____30755 = (i__30753 > 0);
if(and__3937__auto____30755)
{return cljs.core.seq(s__30752);
} else
{return and__3937__auto____30755;
}
})()))
{{
var G__30756 = cljs.core.next(s__30752);
var G__30757 = (i__30753 - 1);
var G__30758 = (sum__30754 + 1);
s__30752 = G__30756;
i__30753 = G__30757;
sum__30754 = G__30758;
continue;
}
} else
{return sum__30754;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__30763 = cljs.core.seq(x);
if(s__30763)
{if(cljs.core.chunked_seq_QMARK_(s__30763))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s__30763),concat.cljs$lang$arity$2(cljs.core.chunk_rest(s__30763),y));
} else
{return cljs.core.cons(cljs.core.first(s__30763),concat.cljs$lang$arity$2(cljs.core.rest(s__30763),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__30767__delegate = function (x,y,zs){
var cat__30766 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__30765 = cljs.core.seq(xys);
if(xys__30765)
{if(cljs.core.chunked_seq_QMARK_(xys__30765))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__30765),cat(cljs.core.chunk_rest(xys__30765),zs));
} else
{return cljs.core.cons(cljs.core.first(xys__30765),cat(cljs.core.rest(xys__30765),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat(cljs.core.first(zs),cljs.core.next(zs));
} else
{return null;
}
}
}),null));
});
return (cat__30766.cljs$lang$arity$2 ? cat__30766.cljs$lang$arity$2(concat.cljs$lang$arity$2(x,y),zs) : cat__30766.call(null,concat.cljs$lang$arity$2(x,y),zs));
};
var G__30767 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30767__delegate.call(this, x, y, zs);
};
G__30767.cljs$lang$maxFixedArity = 2;
G__30767.cljs$lang$applyTo = (function (arglist__30768){
var x = cljs.core.first(arglist__30768);
var y = cljs.core.first(cljs.core.next(arglist__30768));
var zs = cljs.core.rest(cljs.core.next(arglist__30768));
return G__30767__delegate(x, y, zs);
});
G__30767.cljs$lang$arity$variadic = G__30767__delegate;
return G__30767;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__30769__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__30769 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__30769__delegate.call(this, a, b, c, d, more);
};
G__30769.cljs$lang$maxFixedArity = 4;
G__30769.cljs$lang$applyTo = (function (arglist__30770){
var a = cljs.core.first(arglist__30770);
var b = cljs.core.first(cljs.core.next(arglist__30770));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30770)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30770))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30770))));
return G__30769__delegate(a, b, c, d, more);
});
G__30769.cljs$lang$arity$variadic = G__30769__delegate;
return G__30769;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__30812 = cljs.core.seq(args);
if((argc === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var a__30813 = cljs.core._first(args__30812);
var args__30814 = cljs.core._rest(args__30812);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__30813);
} else
{return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a__30813) : f.call(null,a__30813));
}
} else
{var b__30815 = cljs.core._first(args__30814);
var args__30816 = cljs.core._rest(args__30814);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__30813,b__30815);
} else
{return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a__30813,b__30815) : f.call(null,a__30813,b__30815));
}
} else
{var c__30817 = cljs.core._first(args__30816);
var args__30818 = cljs.core._rest(args__30816);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__30813,b__30815,c__30817);
} else
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a__30813,b__30815,c__30817) : f.call(null,a__30813,b__30815,c__30817));
}
} else
{var d__30819 = cljs.core._first(args__30818);
var args__30820 = cljs.core._rest(args__30818);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__30813,b__30815,c__30817,d__30819);
} else
{return (f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a__30813,b__30815,c__30817,d__30819) : f.call(null,a__30813,b__30815,c__30817,d__30819));
}
} else
{var e__30821 = cljs.core._first(args__30820);
var args__30822 = cljs.core._rest(args__30820);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__30813,b__30815,c__30817,d__30819,e__30821);
} else
{return (f.cljs$lang$arity$5 ? f.cljs$lang$arity$5(a__30813,b__30815,c__30817,d__30819,e__30821) : f.call(null,a__30813,b__30815,c__30817,d__30819,e__30821));
}
} else
{var f__30823 = cljs.core._first(args__30822);
var args__30824 = cljs.core._rest(args__30822);
if((argc === 6))
{if(f__30823.cljs$lang$arity$6)
{return f__30823.cljs$lang$arity$6(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823);
} else
{return (f__30823.cljs$lang$arity$6 ? f__30823.cljs$lang$arity$6(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823));
}
} else
{var g__30825 = cljs.core._first(args__30824);
var args__30826 = cljs.core._rest(args__30824);
if((argc === 7))
{if(f__30823.cljs$lang$arity$7)
{return f__30823.cljs$lang$arity$7(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825);
} else
{return (f__30823.cljs$lang$arity$7 ? f__30823.cljs$lang$arity$7(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825));
}
} else
{var h__30827 = cljs.core._first(args__30826);
var args__30828 = cljs.core._rest(args__30826);
if((argc === 8))
{if(f__30823.cljs$lang$arity$8)
{return f__30823.cljs$lang$arity$8(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827);
} else
{return (f__30823.cljs$lang$arity$8 ? f__30823.cljs$lang$arity$8(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827));
}
} else
{var i__30829 = cljs.core._first(args__30828);
var args__30830 = cljs.core._rest(args__30828);
if((argc === 9))
{if(f__30823.cljs$lang$arity$9)
{return f__30823.cljs$lang$arity$9(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829);
} else
{return (f__30823.cljs$lang$arity$9 ? f__30823.cljs$lang$arity$9(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829));
}
} else
{var j__30831 = cljs.core._first(args__30830);
var args__30832 = cljs.core._rest(args__30830);
if((argc === 10))
{if(f__30823.cljs$lang$arity$10)
{return f__30823.cljs$lang$arity$10(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831);
} else
{return (f__30823.cljs$lang$arity$10 ? f__30823.cljs$lang$arity$10(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831));
}
} else
{var k__30833 = cljs.core._first(args__30832);
var args__30834 = cljs.core._rest(args__30832);
if((argc === 11))
{if(f__30823.cljs$lang$arity$11)
{return f__30823.cljs$lang$arity$11(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833);
} else
{return (f__30823.cljs$lang$arity$11 ? f__30823.cljs$lang$arity$11(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833));
}
} else
{var l__30835 = cljs.core._first(args__30834);
var args__30836 = cljs.core._rest(args__30834);
if((argc === 12))
{if(f__30823.cljs$lang$arity$12)
{return f__30823.cljs$lang$arity$12(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835);
} else
{return (f__30823.cljs$lang$arity$12 ? f__30823.cljs$lang$arity$12(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835));
}
} else
{var m__30837 = cljs.core._first(args__30836);
var args__30838 = cljs.core._rest(args__30836);
if((argc === 13))
{if(f__30823.cljs$lang$arity$13)
{return f__30823.cljs$lang$arity$13(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837);
} else
{return (f__30823.cljs$lang$arity$13 ? f__30823.cljs$lang$arity$13(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837));
}
} else
{var n__30839 = cljs.core._first(args__30838);
var args__30840 = cljs.core._rest(args__30838);
if((argc === 14))
{if(f__30823.cljs$lang$arity$14)
{return f__30823.cljs$lang$arity$14(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839);
} else
{return (f__30823.cljs$lang$arity$14 ? f__30823.cljs$lang$arity$14(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839));
}
} else
{var o__30841 = cljs.core._first(args__30840);
var args__30842 = cljs.core._rest(args__30840);
if((argc === 15))
{if(f__30823.cljs$lang$arity$15)
{return f__30823.cljs$lang$arity$15(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841);
} else
{return (f__30823.cljs$lang$arity$15 ? f__30823.cljs$lang$arity$15(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841));
}
} else
{var p__30843 = cljs.core._first(args__30842);
var args__30844 = cljs.core._rest(args__30842);
if((argc === 16))
{if(f__30823.cljs$lang$arity$16)
{return f__30823.cljs$lang$arity$16(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843);
} else
{return (f__30823.cljs$lang$arity$16 ? f__30823.cljs$lang$arity$16(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843));
}
} else
{var q__30845 = cljs.core._first(args__30844);
var args__30846 = cljs.core._rest(args__30844);
if((argc === 17))
{if(f__30823.cljs$lang$arity$17)
{return f__30823.cljs$lang$arity$17(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845);
} else
{return (f__30823.cljs$lang$arity$17 ? f__30823.cljs$lang$arity$17(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845));
}
} else
{var r__30847 = cljs.core._first(args__30846);
var args__30848 = cljs.core._rest(args__30846);
if((argc === 18))
{if(f__30823.cljs$lang$arity$18)
{return f__30823.cljs$lang$arity$18(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847);
} else
{return (f__30823.cljs$lang$arity$18 ? f__30823.cljs$lang$arity$18(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847));
}
} else
{var s__30849 = cljs.core._first(args__30848);
var args__30850 = cljs.core._rest(args__30848);
if((argc === 19))
{if(f__30823.cljs$lang$arity$19)
{return f__30823.cljs$lang$arity$19(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847,s__30849);
} else
{return (f__30823.cljs$lang$arity$19 ? f__30823.cljs$lang$arity$19(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847,s__30849) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847,s__30849));
}
} else
{var t__30851 = cljs.core._first(args__30850);
var args__30852 = cljs.core._rest(args__30850);
if((argc === 20))
{if(f__30823.cljs$lang$arity$20)
{return f__30823.cljs$lang$arity$20(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847,s__30849,t__30851);
} else
{return (f__30823.cljs$lang$arity$20 ? f__30823.cljs$lang$arity$20(a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847,s__30849,t__30851) : f__30823.call(null,a__30813,b__30815,c__30817,d__30819,e__30821,f__30823,g__30825,h__30827,i__30829,j__30831,k__30833,l__30835,m__30837,n__30839,o__30841,p__30843,q__30845,r__30847,s__30849,t__30851));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__30867 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__30868 = cljs.core.bounded_count(args,(fixed_arity__30867 + 1));
if((bc__30868 <= fixed_arity__30867))
{return cljs.core.apply_to(f,bc__30868,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist__30869 = cljs.core.list_STAR_.cljs$lang$arity$2(x,args);
var fixed_arity__30870 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__30871 = cljs.core.bounded_count(arglist__30869,(fixed_arity__30870 + 1));
if((bc__30871 <= fixed_arity__30870))
{return cljs.core.apply_to(f,bc__30871,arglist__30869);
} else
{return f.cljs$lang$applyTo(arglist__30869);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__30869));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__30872 = cljs.core.list_STAR_.cljs$lang$arity$3(x,y,args);
var fixed_arity__30873 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__30874 = cljs.core.bounded_count(arglist__30872,(fixed_arity__30873 + 1));
if((bc__30874 <= fixed_arity__30873))
{return cljs.core.apply_to(f,bc__30874,arglist__30872);
} else
{return f.cljs$lang$applyTo(arglist__30872);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__30872));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__30875 = cljs.core.list_STAR_.cljs$lang$arity$4(x,y,z,args);
var fixed_arity__30876 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__30877 = cljs.core.bounded_count(arglist__30875,(fixed_arity__30876 + 1));
if((bc__30877 <= fixed_arity__30876))
{return cljs.core.apply_to(f,bc__30877,arglist__30875);
} else
{return f.cljs$lang$applyTo(arglist__30875);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__30875));
}
});
var apply__6 = (function() { 
var G__30881__delegate = function (f,a,b,c,d,args){
var arglist__30878 = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity__30879 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__30880 = cljs.core.bounded_count(arglist__30878,(fixed_arity__30879 + 1));
if((bc__30880 <= fixed_arity__30879))
{return cljs.core.apply_to(f,bc__30880,arglist__30878);
} else
{return f.cljs$lang$applyTo(arglist__30878);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__30878));
}
};
var G__30881 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__30881__delegate.call(this, f, a, b, c, d, args);
};
G__30881.cljs$lang$maxFixedArity = 5;
G__30881.cljs$lang$applyTo = (function (arglist__30882){
var f = cljs.core.first(arglist__30882);
var a = cljs.core.first(cljs.core.next(arglist__30882));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30882)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30882))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30882)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30882)))));
return G__30881__delegate(f, a, b, c, d, args);
});
G__30881.cljs$lang$arity$variadic = G__30881__delegate;
return G__30881;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$lang$arity$3(f,cljs.core.meta(obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__30883){
var obj = cljs.core.first(arglist__30883);
var f = cljs.core.first(cljs.core.next(arglist__30883));
var args = cljs.core.rest(cljs.core.next(arglist__30883));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__30884__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(cljs.core._EQ_,x,y,more));
};
var G__30884 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30884__delegate.call(this, x, y, more);
};
G__30884.cljs$lang$maxFixedArity = 2;
G__30884.cljs$lang$applyTo = (function (arglist__30885){
var x = cljs.core.first(arglist__30885);
var y = cljs.core.first(cljs.core.next(arglist__30885));
var more = cljs.core.rest(cljs.core.next(arglist__30885));
return G__30884__delegate(x, y, more);
});
G__30884.cljs$lang$arity$variadic = G__30884__delegate;
return G__30884;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)))))
{{
var G__30886 = pred;
var G__30887 = cljs.core.next(coll);
pred = G__30886;
coll = G__30887;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll))
{var or__3939__auto____30889 = (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)));
if(cljs.core.truth_(or__3939__auto____30889))
{return or__3939__auto____30889;
} else
{{
var G__30890 = pred;
var G__30891 = cljs.core.next(coll);
pred = G__30890;
coll = G__30891;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__30892 = null;
var G__30892__0 = (function (){
return cljs.core.not((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
});
var G__30892__1 = (function (x){
return cljs.core.not((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
});
var G__30892__2 = (function (x,y){
return cljs.core.not((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)));
});
var G__30892__3 = (function() { 
var G__30893__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(f,x,y,zs));
};
var G__30893 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30893__delegate.call(this, x, y, zs);
};
G__30893.cljs$lang$maxFixedArity = 2;
G__30893.cljs$lang$applyTo = (function (arglist__30894){
var x = cljs.core.first(arglist__30894);
var y = cljs.core.first(cljs.core.next(arglist__30894));
var zs = cljs.core.rest(cljs.core.next(arglist__30894));
return G__30893__delegate(x, y, zs);
});
G__30893.cljs$lang$arity$variadic = G__30893__delegate;
return G__30893;
})()
;
G__30892 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__30892__0.call(this);
case 1:
return G__30892__1.call(this,x);
case 2:
return G__30892__2.call(this,x,y);
default:
return G__30892__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__30892.cljs$lang$maxFixedArity = 2;
G__30892.cljs$lang$applyTo = G__30892__3.cljs$lang$applyTo;
return G__30892;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__30895__delegate = function (args){
return x;
};
var G__30895 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30895__delegate.call(this, args);
};
G__30895.cljs$lang$maxFixedArity = 0;
G__30895.cljs$lang$applyTo = (function (arglist__30896){
var args = cljs.core.seq(arglist__30896);;
return G__30895__delegate(args);
});
G__30895.cljs$lang$arity$variadic = G__30895__delegate;
return G__30895;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__30903 = null;
var G__30903__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))) : f.call(null,(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))));
});
var G__30903__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))));
});
var G__30903__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))) : f.call(null,(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))));
});
var G__30903__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))) : f.call(null,(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))));
});
var G__30903__4 = (function() { 
var G__30904__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)) : f.call(null,cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)));
};
var G__30904 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30904__delegate.call(this, x, y, z, args);
};
G__30904.cljs$lang$maxFixedArity = 3;
G__30904.cljs$lang$applyTo = (function (arglist__30905){
var x = cljs.core.first(arglist__30905);
var y = cljs.core.first(cljs.core.next(arglist__30905));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30905)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30905)));
return G__30904__delegate(x, y, z, args);
});
G__30904.cljs$lang$arity$variadic = G__30904__delegate;
return G__30904;
})()
;
G__30903 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__30903__0.call(this);
case 1:
return G__30903__1.call(this,x);
case 2:
return G__30903__2.call(this,x,y);
case 3:
return G__30903__3.call(this,x,y,z);
default:
return G__30903__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__30903.cljs$lang$maxFixedArity = 3;
G__30903.cljs$lang$applyTo = G__30903__4.cljs$lang$applyTo;
return G__30903;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__30906 = null;
var G__30906__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))));
});
var G__30906__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))));
});
var G__30906__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))));
});
var G__30906__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))));
});
var G__30906__4 = (function() { 
var G__30907__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))));
};
var G__30907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30907__delegate.call(this, x, y, z, args);
};
G__30907.cljs$lang$maxFixedArity = 3;
G__30907.cljs$lang$applyTo = (function (arglist__30908){
var x = cljs.core.first(arglist__30908);
var y = cljs.core.first(cljs.core.next(arglist__30908));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30908)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30908)));
return G__30907__delegate(x, y, z, args);
});
G__30907.cljs$lang$arity$variadic = G__30907__delegate;
return G__30907;
})()
;
G__30906 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__30906__0.call(this);
case 1:
return G__30906__1.call(this,x);
case 2:
return G__30906__2.call(this,x,y);
case 3:
return G__30906__3.call(this,x,y,z);
default:
return G__30906__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__30906.cljs$lang$maxFixedArity = 3;
G__30906.cljs$lang$applyTo = G__30906__4.cljs$lang$applyTo;
return G__30906;
})()
});
var comp__4 = (function() { 
var G__30909__delegate = function (f1,f2,f3,fs){
var fs__30900 = cljs.core.reverse(cljs.core.list_STAR_.cljs$lang$arity$4(f1,f2,f3,fs));
return (function() { 
var G__30910__delegate = function (args){
var ret__30901 = cljs.core.apply.cljs$lang$arity$2(cljs.core.first(fs__30900),args);
var fs__30902 = cljs.core.next(fs__30900);
while(true){
if(fs__30902)
{{
var G__30911 = cljs.core.first(fs__30902).call(null,ret__30901);
var G__30912 = cljs.core.next(fs__30902);
ret__30901 = G__30911;
fs__30902 = G__30912;
continue;
}
} else
{return ret__30901;
}
break;
}
};
var G__30910 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30910__delegate.call(this, args);
};
G__30910.cljs$lang$maxFixedArity = 0;
G__30910.cljs$lang$applyTo = (function (arglist__30913){
var args = cljs.core.seq(arglist__30913);;
return G__30910__delegate(args);
});
G__30910.cljs$lang$arity$variadic = G__30910__delegate;
return G__30910;
})()
;
};
var G__30909 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30909__delegate.call(this, f1, f2, f3, fs);
};
G__30909.cljs$lang$maxFixedArity = 3;
G__30909.cljs$lang$applyTo = (function (arglist__30914){
var f1 = cljs.core.first(arglist__30914);
var f2 = cljs.core.first(cljs.core.next(arglist__30914));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30914)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30914)));
return G__30909__delegate(f1, f2, f3, fs);
});
G__30909.cljs$lang$arity$variadic = G__30909__delegate;
return G__30909;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__30915__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$3(f,arg1,args);
};
var G__30915 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30915__delegate.call(this, args);
};
G__30915.cljs$lang$maxFixedArity = 0;
G__30915.cljs$lang$applyTo = (function (arglist__30916){
var args = cljs.core.seq(arglist__30916);;
return G__30915__delegate(args);
});
G__30915.cljs$lang$arity$variadic = G__30915__delegate;
return G__30915;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__30917__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$4(f,arg1,arg2,args);
};
var G__30917 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30917__delegate.call(this, args);
};
G__30917.cljs$lang$maxFixedArity = 0;
G__30917.cljs$lang$applyTo = (function (arglist__30918){
var args = cljs.core.seq(arglist__30918);;
return G__30917__delegate(args);
});
G__30917.cljs$lang$arity$variadic = G__30917__delegate;
return G__30917;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__30919__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,args);
};
var G__30919 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30919__delegate.call(this, args);
};
G__30919.cljs$lang$maxFixedArity = 0;
G__30919.cljs$lang$applyTo = (function (arglist__30920){
var args = cljs.core.seq(arglist__30920);;
return G__30919__delegate(args);
});
G__30919.cljs$lang$arity$variadic = G__30919__delegate;
return G__30919;
})()
;
});
var partial__5 = (function() { 
var G__30921__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__30922__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$lang$arity$2(more,args));
};
var G__30922 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30922__delegate.call(this, args);
};
G__30922.cljs$lang$maxFixedArity = 0;
G__30922.cljs$lang$applyTo = (function (arglist__30923){
var args = cljs.core.seq(arglist__30923);;
return G__30922__delegate(args);
});
G__30922.cljs$lang$arity$variadic = G__30922__delegate;
return G__30922;
})()
;
};
var G__30921 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__30921__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__30921.cljs$lang$maxFixedArity = 4;
G__30921.cljs$lang$applyTo = (function (arglist__30924){
var f = cljs.core.first(arglist__30924);
var arg1 = cljs.core.first(cljs.core.next(arglist__30924));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30924)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30924))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30924))));
return G__30921__delegate(f, arg1, arg2, arg3, more);
});
G__30921.cljs$lang$arity$variadic = G__30921__delegate;
return G__30921;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__30925 = null;
var G__30925__1 = (function (a){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((((a == null))?x:a)) : f.call(null,(((a == null))?x:a)));
});
var G__30925__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),b) : f.call(null,(((a == null))?x:a),b));
});
var G__30925__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),b,c) : f.call(null,(((a == null))?x:a),b,c));
});
var G__30925__4 = (function() { 
var G__30926__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__30926 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30926__delegate.call(this, a, b, c, ds);
};
G__30926.cljs$lang$maxFixedArity = 3;
G__30926.cljs$lang$applyTo = (function (arglist__30927){
var a = cljs.core.first(arglist__30927);
var b = cljs.core.first(cljs.core.next(arglist__30927));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30927)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30927)));
return G__30926__delegate(a, b, c, ds);
});
G__30926.cljs$lang$arity$variadic = G__30926__delegate;
return G__30926;
})()
;
G__30925 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__30925__1.call(this,a);
case 2:
return G__30925__2.call(this,a,b);
case 3:
return G__30925__3.call(this,a,b,c);
default:
return G__30925__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__30925.cljs$lang$maxFixedArity = 3;
G__30925.cljs$lang$applyTo = G__30925__4.cljs$lang$applyTo;
return G__30925;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__30928 = null;
var G__30928__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__30928__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),c) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),c));
});
var G__30928__4 = (function() { 
var G__30929__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__30929 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30929__delegate.call(this, a, b, c, ds);
};
G__30929.cljs$lang$maxFixedArity = 3;
G__30929.cljs$lang$applyTo = (function (arglist__30930){
var a = cljs.core.first(arglist__30930);
var b = cljs.core.first(cljs.core.next(arglist__30930));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30930)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30930)));
return G__30929__delegate(a, b, c, ds);
});
G__30929.cljs$lang$arity$variadic = G__30929__delegate;
return G__30929;
})()
;
G__30928 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__30928__2.call(this,a,b);
case 3:
return G__30928__3.call(this,a,b,c);
default:
return G__30928__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__30928.cljs$lang$maxFixedArity = 3;
G__30928.cljs$lang$applyTo = G__30928__4.cljs$lang$applyTo;
return G__30928;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__30931 = null;
var G__30931__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__30931__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)));
});
var G__30931__4 = (function() { 
var G__30932__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__30932 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30932__delegate.call(this, a, b, c, ds);
};
G__30932.cljs$lang$maxFixedArity = 3;
G__30932.cljs$lang$applyTo = (function (arglist__30933){
var a = cljs.core.first(arglist__30933);
var b = cljs.core.first(cljs.core.next(arglist__30933));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30933)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30933)));
return G__30932__delegate(a, b, c, ds);
});
G__30932.cljs$lang$arity$variadic = G__30932__delegate;
return G__30932;
})()
;
G__30931 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__30931__2.call(this,a,b);
case 3:
return G__30931__3.call(this,a,b,c);
default:
return G__30931__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__30931.cljs$lang$maxFixedArity = 3;
G__30931.cljs$lang$applyTo = G__30931__4.cljs$lang$applyTo;
return G__30931;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__30949 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____30957 = cljs.core.seq(coll);
if(temp__4088__auto____30957)
{var s__30958 = temp__4088__auto____30957;
if(cljs.core.chunked_seq_QMARK_(s__30958))
{var c__30959 = cljs.core.chunk_first(s__30958);
var size__30960 = cljs.core.count(c__30959);
var b__30961 = cljs.core.chunk_buffer(size__30960);
var n__2560__auto____30962 = size__30960;
var i__30963 = 0;
while(true){
if((i__30963 < n__2560__auto____30962))
{cljs.core.chunk_append(b__30961,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__30963),cljs.core._nth.cljs$lang$arity$2(c__30959,i__30963)) : f.call(null,(idx + i__30963),cljs.core._nth.cljs$lang$arity$2(c__30959,i__30963))));
{
var G__30964 = (i__30963 + 1);
i__30963 = G__30964;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__30961),mapi((idx + size__30960),cljs.core.chunk_rest(s__30958)));
} else
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__30958)) : f.call(null,idx,cljs.core.first(s__30958))),mapi((idx + 1),cljs.core.rest(s__30958)));
}
} else
{return null;
}
}),null));
});
return (mapi__30949.cljs$lang$arity$2 ? mapi__30949.cljs$lang$arity$2(0,coll) : mapi__30949.call(null,0,coll));
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____30974 = cljs.core.seq(coll);
if(temp__4088__auto____30974)
{var s__30975 = temp__4088__auto____30974;
if(cljs.core.chunked_seq_QMARK_(s__30975))
{var c__30976 = cljs.core.chunk_first(s__30975);
var size__30977 = cljs.core.count(c__30976);
var b__30978 = cljs.core.chunk_buffer(size__30977);
var n__2560__auto____30979 = size__30977;
var i__30980 = 0;
while(true){
if((i__30980 < n__2560__auto____30979))
{var x__30981 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__30976,i__30980)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__30976,i__30980)));
if((x__30981 == null))
{} else
{cljs.core.chunk_append(b__30978,x__30981);
}
{
var G__30983 = (i__30980 + 1);
i__30980 = G__30983;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__30978),keep(f,cljs.core.chunk_rest(s__30975)));
} else
{var x__30982 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__30975)) : f.call(null,cljs.core.first(s__30975)));
if((x__30982 == null))
{return keep(f,cljs.core.rest(s__30975));
} else
{return cljs.core.cons(x__30982,keep(f,cljs.core.rest(s__30975)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__31009 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____31019 = cljs.core.seq(coll);
if(temp__4088__auto____31019)
{var s__31020 = temp__4088__auto____31019;
if(cljs.core.chunked_seq_QMARK_(s__31020))
{var c__31021 = cljs.core.chunk_first(s__31020);
var size__31022 = cljs.core.count(c__31021);
var b__31023 = cljs.core.chunk_buffer(size__31022);
var n__2560__auto____31024 = size__31022;
var i__31025 = 0;
while(true){
if((i__31025 < n__2560__auto____31024))
{var x__31026 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__31025),cljs.core._nth.cljs$lang$arity$2(c__31021,i__31025)) : f.call(null,(idx + i__31025),cljs.core._nth.cljs$lang$arity$2(c__31021,i__31025)));
if((x__31026 == null))
{} else
{cljs.core.chunk_append(b__31023,x__31026);
}
{
var G__31028 = (i__31025 + 1);
i__31025 = G__31028;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__31023),keepi((idx + size__31022),cljs.core.chunk_rest(s__31020)));
} else
{var x__31027 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__31020)) : f.call(null,idx,cljs.core.first(s__31020)));
if((x__31027 == null))
{return keepi((idx + 1),cljs.core.rest(s__31020));
} else
{return cljs.core.cons(x__31027,keepi((idx + 1),cljs.core.rest(s__31020)));
}
}
} else
{return null;
}
}),null));
});
return (keepi__31009.cljs$lang$arity$2 ? keepi__31009.cljs$lang$arity$2(0,coll) : keepi__31009.call(null,0,coll));
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x)));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3937__auto____31114 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3937__auto____31114))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
} else
{return and__3937__auto____31114;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3937__auto____31115 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3937__auto____31115))
{var and__3937__auto____31116 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(and__3937__auto____31116))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
} else
{return and__3937__auto____31116;
}
} else
{return and__3937__auto____31115;
}
})());
});
var ep1__4 = (function() { 
var G__31185__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3937__auto____31117 = ep1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3937__auto____31117))
{return cljs.core.every_QMARK_(p,args);
} else
{return and__3937__auto____31117;
}
})());
};
var G__31185 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31185__delegate.call(this, x, y, z, args);
};
G__31185.cljs$lang$maxFixedArity = 3;
G__31185.cljs$lang$applyTo = (function (arglist__31186){
var x = cljs.core.first(arglist__31186);
var y = cljs.core.first(cljs.core.next(arglist__31186));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31186)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31186)));
return G__31185__delegate(x, y, z, args);
});
G__31185.cljs$lang$arity$variadic = G__31185__delegate;
return G__31185;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3937__auto____31129 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3937__auto____31129))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
} else
{return and__3937__auto____31129;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3937__auto____31130 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3937__auto____31130))
{var and__3937__auto____31131 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3937__auto____31131))
{var and__3937__auto____31132 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3937__auto____31132))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
} else
{return and__3937__auto____31132;
}
} else
{return and__3937__auto____31131;
}
} else
{return and__3937__auto____31130;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3937__auto____31133 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3937__auto____31133))
{var and__3937__auto____31134 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3937__auto____31134))
{var and__3937__auto____31135 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3937__auto____31135))
{var and__3937__auto____31136 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3937__auto____31136))
{var and__3937__auto____31137 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3937__auto____31137))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
} else
{return and__3937__auto____31137;
}
} else
{return and__3937__auto____31136;
}
} else
{return and__3937__auto____31135;
}
} else
{return and__3937__auto____31134;
}
} else
{return and__3937__auto____31133;
}
})());
});
var ep2__4 = (function() { 
var G__31187__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3937__auto____31138 = ep2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3937__auto____31138))
{return cljs.core.every_QMARK_((function (p1__30984_SHARP_){
var and__3937__auto____31139 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__30984_SHARP_) : p1.call(null,p1__30984_SHARP_));
if(cljs.core.truth_(and__3937__auto____31139))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__30984_SHARP_) : p2.call(null,p1__30984_SHARP_));
} else
{return and__3937__auto____31139;
}
}),args);
} else
{return and__3937__auto____31138;
}
})());
};
var G__31187 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31187__delegate.call(this, x, y, z, args);
};
G__31187.cljs$lang$maxFixedArity = 3;
G__31187.cljs$lang$applyTo = (function (arglist__31188){
var x = cljs.core.first(arglist__31188);
var y = cljs.core.first(cljs.core.next(arglist__31188));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31188)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31188)));
return G__31187__delegate(x, y, z, args);
});
G__31187.cljs$lang$arity$variadic = G__31187__delegate;
return G__31187;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3937__auto____31158 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3937__auto____31158))
{var and__3937__auto____31159 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3937__auto____31159))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
} else
{return and__3937__auto____31159;
}
} else
{return and__3937__auto____31158;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3937__auto____31160 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3937__auto____31160))
{var and__3937__auto____31161 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3937__auto____31161))
{var and__3937__auto____31162 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3937__auto____31162))
{var and__3937__auto____31163 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3937__auto____31163))
{var and__3937__auto____31164 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3937__auto____31164))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
} else
{return and__3937__auto____31164;
}
} else
{return and__3937__auto____31163;
}
} else
{return and__3937__auto____31162;
}
} else
{return and__3937__auto____31161;
}
} else
{return and__3937__auto____31160;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3937__auto____31165 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3937__auto____31165))
{var and__3937__auto____31166 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3937__auto____31166))
{var and__3937__auto____31167 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3937__auto____31167))
{var and__3937__auto____31168 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3937__auto____31168))
{var and__3937__auto____31169 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3937__auto____31169))
{var and__3937__auto____31170 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(and__3937__auto____31170))
{var and__3937__auto____31171 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3937__auto____31171))
{var and__3937__auto____31172 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(and__3937__auto____31172))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
} else
{return and__3937__auto____31172;
}
} else
{return and__3937__auto____31171;
}
} else
{return and__3937__auto____31170;
}
} else
{return and__3937__auto____31169;
}
} else
{return and__3937__auto____31168;
}
} else
{return and__3937__auto____31167;
}
} else
{return and__3937__auto____31166;
}
} else
{return and__3937__auto____31165;
}
})());
});
var ep3__4 = (function() { 
var G__31189__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3937__auto____31173 = ep3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3937__auto____31173))
{return cljs.core.every_QMARK_((function (p1__30985_SHARP_){
var and__3937__auto____31174 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__30985_SHARP_) : p1.call(null,p1__30985_SHARP_));
if(cljs.core.truth_(and__3937__auto____31174))
{var and__3937__auto____31175 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__30985_SHARP_) : p2.call(null,p1__30985_SHARP_));
if(cljs.core.truth_(and__3937__auto____31175))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__30985_SHARP_) : p3.call(null,p1__30985_SHARP_));
} else
{return and__3937__auto____31175;
}
} else
{return and__3937__auto____31174;
}
}),args);
} else
{return and__3937__auto____31173;
}
})());
};
var G__31189 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31189__delegate.call(this, x, y, z, args);
};
G__31189.cljs$lang$maxFixedArity = 3;
G__31189.cljs$lang$applyTo = (function (arglist__31190){
var x = cljs.core.first(arglist__31190);
var y = cljs.core.first(cljs.core.next(arglist__31190));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31190)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31190)));
return G__31189__delegate(x, y, z, args);
});
G__31189.cljs$lang$arity$variadic = G__31189__delegate;
return G__31189;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__31191__delegate = function (p1,p2,p3,ps){
var ps__31176 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_((function (p1__30986_SHARP_){
return (p1__30986_SHARP_.cljs$lang$arity$1 ? p1__30986_SHARP_.cljs$lang$arity$1(x) : p1__30986_SHARP_.call(null,x));
}),ps__31176);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_((function (p1__30987_SHARP_){
var and__3937__auto____31181 = (p1__30987_SHARP_.cljs$lang$arity$1 ? p1__30987_SHARP_.cljs$lang$arity$1(x) : p1__30987_SHARP_.call(null,x));
if(cljs.core.truth_(and__3937__auto____31181))
{return (p1__30987_SHARP_.cljs$lang$arity$1 ? p1__30987_SHARP_.cljs$lang$arity$1(y) : p1__30987_SHARP_.call(null,y));
} else
{return and__3937__auto____31181;
}
}),ps__31176);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_((function (p1__30988_SHARP_){
var and__3937__auto____31182 = (p1__30988_SHARP_.cljs$lang$arity$1 ? p1__30988_SHARP_.cljs$lang$arity$1(x) : p1__30988_SHARP_.call(null,x));
if(cljs.core.truth_(and__3937__auto____31182))
{var and__3937__auto____31183 = (p1__30988_SHARP_.cljs$lang$arity$1 ? p1__30988_SHARP_.cljs$lang$arity$1(y) : p1__30988_SHARP_.call(null,y));
if(cljs.core.truth_(and__3937__auto____31183))
{return (p1__30988_SHARP_.cljs$lang$arity$1 ? p1__30988_SHARP_.cljs$lang$arity$1(z) : p1__30988_SHARP_.call(null,z));
} else
{return and__3937__auto____31183;
}
} else
{return and__3937__auto____31182;
}
}),ps__31176);
});
var epn__4 = (function() { 
var G__31192__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3937__auto____31184 = epn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3937__auto____31184))
{return cljs.core.every_QMARK_((function (p1__30989_SHARP_){
return cljs.core.every_QMARK_(p1__30989_SHARP_,args);
}),ps__31176);
} else
{return and__3937__auto____31184;
}
})());
};
var G__31192 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31192__delegate.call(this, x, y, z, args);
};
G__31192.cljs$lang$maxFixedArity = 3;
G__31192.cljs$lang$applyTo = (function (arglist__31193){
var x = cljs.core.first(arglist__31193);
var y = cljs.core.first(cljs.core.next(arglist__31193));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31193)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31193)));
return G__31192__delegate(x, y, z, args);
});
G__31192.cljs$lang$arity$variadic = G__31192__delegate;
return G__31192;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__31191 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31191__delegate.call(this, p1, p2, p3, ps);
};
G__31191.cljs$lang$maxFixedArity = 3;
G__31191.cljs$lang$applyTo = (function (arglist__31194){
var p1 = cljs.core.first(arglist__31194);
var p2 = cljs.core.first(cljs.core.next(arglist__31194));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31194)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31194)));
return G__31191__delegate(p1, p2, p3, ps);
});
G__31191.cljs$lang$arity$variadic = G__31191__delegate;
return G__31191;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
});
var sp1__2 = (function (x,y){
var or__3939__auto____31275 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3939__auto____31275))
{return or__3939__auto____31275;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
}
});
var sp1__3 = (function (x,y,z){
var or__3939__auto____31276 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3939__auto____31276))
{return or__3939__auto____31276;
} else
{var or__3939__auto____31277 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(or__3939__auto____31277))
{return or__3939__auto____31277;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
}
}
});
var sp1__4 = (function() { 
var G__31346__delegate = function (x,y,z,args){
var or__3939__auto____31278 = sp1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3939__auto____31278))
{return or__3939__auto____31278;
} else
{return cljs.core.some(p,args);
}
};
var G__31346 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31346__delegate.call(this, x, y, z, args);
};
G__31346.cljs$lang$maxFixedArity = 3;
G__31346.cljs$lang$applyTo = (function (arglist__31347){
var x = cljs.core.first(arglist__31347);
var y = cljs.core.first(cljs.core.next(arglist__31347));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31347)));
return G__31346__delegate(x, y, z, args);
});
G__31346.cljs$lang$arity$variadic = G__31346__delegate;
return G__31346;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3939__auto____31290 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3939__auto____31290))
{return or__3939__auto____31290;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
}
});
var sp2__2 = (function (x,y){
var or__3939__auto____31291 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3939__auto____31291))
{return or__3939__auto____31291;
} else
{var or__3939__auto____31292 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3939__auto____31292))
{return or__3939__auto____31292;
} else
{var or__3939__auto____31293 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3939__auto____31293))
{return or__3939__auto____31293;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3939__auto____31294 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3939__auto____31294))
{return or__3939__auto____31294;
} else
{var or__3939__auto____31295 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3939__auto____31295))
{return or__3939__auto____31295;
} else
{var or__3939__auto____31296 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3939__auto____31296))
{return or__3939__auto____31296;
} else
{var or__3939__auto____31297 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3939__auto____31297))
{return or__3939__auto____31297;
} else
{var or__3939__auto____31298 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3939__auto____31298))
{return or__3939__auto____31298;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__31348__delegate = function (x,y,z,args){
var or__3939__auto____31299 = sp2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3939__auto____31299))
{return or__3939__auto____31299;
} else
{return cljs.core.some((function (p1__31029_SHARP_){
var or__3939__auto____31300 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__31029_SHARP_) : p1.call(null,p1__31029_SHARP_));
if(cljs.core.truth_(or__3939__auto____31300))
{return or__3939__auto____31300;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__31029_SHARP_) : p2.call(null,p1__31029_SHARP_));
}
}),args);
}
};
var G__31348 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31348__delegate.call(this, x, y, z, args);
};
G__31348.cljs$lang$maxFixedArity = 3;
G__31348.cljs$lang$applyTo = (function (arglist__31349){
var x = cljs.core.first(arglist__31349);
var y = cljs.core.first(cljs.core.next(arglist__31349));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31349)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31349)));
return G__31348__delegate(x, y, z, args);
});
G__31348.cljs$lang$arity$variadic = G__31348__delegate;
return G__31348;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3939__auto____31319 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3939__auto____31319))
{return or__3939__auto____31319;
} else
{var or__3939__auto____31320 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3939__auto____31320))
{return or__3939__auto____31320;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
}
}
});
var sp3__2 = (function (x,y){
var or__3939__auto____31321 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3939__auto____31321))
{return or__3939__auto____31321;
} else
{var or__3939__auto____31322 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3939__auto____31322))
{return or__3939__auto____31322;
} else
{var or__3939__auto____31323 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3939__auto____31323))
{return or__3939__auto____31323;
} else
{var or__3939__auto____31324 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3939__auto____31324))
{return or__3939__auto____31324;
} else
{var or__3939__auto____31325 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3939__auto____31325))
{return or__3939__auto____31325;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3939__auto____31326 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3939__auto____31326))
{return or__3939__auto____31326;
} else
{var or__3939__auto____31327 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3939__auto____31327))
{return or__3939__auto____31327;
} else
{var or__3939__auto____31328 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3939__auto____31328))
{return or__3939__auto____31328;
} else
{var or__3939__auto____31329 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3939__auto____31329))
{return or__3939__auto____31329;
} else
{var or__3939__auto____31330 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3939__auto____31330))
{return or__3939__auto____31330;
} else
{var or__3939__auto____31331 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(or__3939__auto____31331))
{return or__3939__auto____31331;
} else
{var or__3939__auto____31332 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3939__auto____31332))
{return or__3939__auto____31332;
} else
{var or__3939__auto____31333 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(or__3939__auto____31333))
{return or__3939__auto____31333;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__31350__delegate = function (x,y,z,args){
var or__3939__auto____31334 = sp3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3939__auto____31334))
{return or__3939__auto____31334;
} else
{return cljs.core.some((function (p1__31030_SHARP_){
var or__3939__auto____31335 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__31030_SHARP_) : p1.call(null,p1__31030_SHARP_));
if(cljs.core.truth_(or__3939__auto____31335))
{return or__3939__auto____31335;
} else
{var or__3939__auto____31336 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__31030_SHARP_) : p2.call(null,p1__31030_SHARP_));
if(cljs.core.truth_(or__3939__auto____31336))
{return or__3939__auto____31336;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__31030_SHARP_) : p3.call(null,p1__31030_SHARP_));
}
}
}),args);
}
};
var G__31350 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31350__delegate.call(this, x, y, z, args);
};
G__31350.cljs$lang$maxFixedArity = 3;
G__31350.cljs$lang$applyTo = (function (arglist__31351){
var x = cljs.core.first(arglist__31351);
var y = cljs.core.first(cljs.core.next(arglist__31351));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31351)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31351)));
return G__31350__delegate(x, y, z, args);
});
G__31350.cljs$lang$arity$variadic = G__31350__delegate;
return G__31350;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__31352__delegate = function (p1,p2,p3,ps){
var ps__31337 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some((function (p1__31031_SHARP_){
return (p1__31031_SHARP_.cljs$lang$arity$1 ? p1__31031_SHARP_.cljs$lang$arity$1(x) : p1__31031_SHARP_.call(null,x));
}),ps__31337);
});
var spn__2 = (function (x,y){
return cljs.core.some((function (p1__31032_SHARP_){
var or__3939__auto____31342 = (p1__31032_SHARP_.cljs$lang$arity$1 ? p1__31032_SHARP_.cljs$lang$arity$1(x) : p1__31032_SHARP_.call(null,x));
if(cljs.core.truth_(or__3939__auto____31342))
{return or__3939__auto____31342;
} else
{return (p1__31032_SHARP_.cljs$lang$arity$1 ? p1__31032_SHARP_.cljs$lang$arity$1(y) : p1__31032_SHARP_.call(null,y));
}
}),ps__31337);
});
var spn__3 = (function (x,y,z){
return cljs.core.some((function (p1__31033_SHARP_){
var or__3939__auto____31343 = (p1__31033_SHARP_.cljs$lang$arity$1 ? p1__31033_SHARP_.cljs$lang$arity$1(x) : p1__31033_SHARP_.call(null,x));
if(cljs.core.truth_(or__3939__auto____31343))
{return or__3939__auto____31343;
} else
{var or__3939__auto____31344 = (p1__31033_SHARP_.cljs$lang$arity$1 ? p1__31033_SHARP_.cljs$lang$arity$1(y) : p1__31033_SHARP_.call(null,y));
if(cljs.core.truth_(or__3939__auto____31344))
{return or__3939__auto____31344;
} else
{return (p1__31033_SHARP_.cljs$lang$arity$1 ? p1__31033_SHARP_.cljs$lang$arity$1(z) : p1__31033_SHARP_.call(null,z));
}
}
}),ps__31337);
});
var spn__4 = (function() { 
var G__31353__delegate = function (x,y,z,args){
var or__3939__auto____31345 = spn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3939__auto____31345))
{return or__3939__auto____31345;
} else
{return cljs.core.some((function (p1__31034_SHARP_){
return cljs.core.some(p1__31034_SHARP_,args);
}),ps__31337);
}
};
var G__31353 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31353__delegate.call(this, x, y, z, args);
};
G__31353.cljs$lang$maxFixedArity = 3;
G__31353.cljs$lang$applyTo = (function (arglist__31354){
var x = cljs.core.first(arglist__31354);
var y = cljs.core.first(cljs.core.next(arglist__31354));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31354)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31354)));
return G__31353__delegate(x, y, z, args);
});
G__31353.cljs$lang$arity$variadic = G__31353__delegate;
return G__31353;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__31352 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31352__delegate.call(this, p1, p2, p3, ps);
};
G__31352.cljs$lang$maxFixedArity = 3;
G__31352.cljs$lang$applyTo = (function (arglist__31355){
var p1 = cljs.core.first(arglist__31355);
var p2 = cljs.core.first(cljs.core.next(arglist__31355));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31355)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31355)));
return G__31352__delegate(p1, p2, p3, ps);
});
G__31352.cljs$lang$arity$variadic = G__31352__delegate;
return G__31352;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____31374 = cljs.core.seq(coll);
if(temp__4088__auto____31374)
{var s__31375 = temp__4088__auto____31374;
if(cljs.core.chunked_seq_QMARK_(s__31375))
{var c__31376 = cljs.core.chunk_first(s__31375);
var size__31377 = cljs.core.count(c__31376);
var b__31378 = cljs.core.chunk_buffer(size__31377);
var n__2560__auto____31379 = size__31377;
var i__31380 = 0;
while(true){
if((i__31380 < n__2560__auto____31379))
{cljs.core.chunk_append(b__31378,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__31376,i__31380)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__31376,i__31380))));
{
var G__31392 = (i__31380 + 1);
i__31380 = G__31392;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__31378),map.cljs$lang$arity$2(f,cljs.core.chunk_rest(s__31375)));
} else
{return cljs.core.cons((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__31375)) : f.call(null,cljs.core.first(s__31375))),map.cljs$lang$arity$2(f,cljs.core.rest(s__31375)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__31381 = cljs.core.seq(c1);
var s2__31382 = cljs.core.seq(c2);
if((function (){var and__3937__auto____31383 = s1__31381;
if(and__3937__auto____31383)
{return s2__31382;
} else
{return and__3937__auto____31383;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(s1__31381),cljs.core.first(s2__31382)) : f.call(null,cljs.core.first(s1__31381),cljs.core.first(s2__31382))),map.cljs$lang$arity$3(f,cljs.core.rest(s1__31381),cljs.core.rest(s2__31382)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__31384 = cljs.core.seq(c1);
var s2__31385 = cljs.core.seq(c2);
var s3__31386 = cljs.core.seq(c3);
if((function (){var and__3937__auto____31387 = s1__31384;
if(and__3937__auto____31387)
{var and__3937__auto____31388 = s2__31385;
if(and__3937__auto____31388)
{return s3__31386;
} else
{return and__3937__auto____31388;
}
} else
{return and__3937__auto____31387;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(cljs.core.first(s1__31384),cljs.core.first(s2__31385),cljs.core.first(s3__31386)) : f.call(null,cljs.core.first(s1__31384),cljs.core.first(s2__31385),cljs.core.first(s3__31386))),map.cljs$lang$arity$4(f,cljs.core.rest(s1__31384),cljs.core.rest(s2__31385),cljs.core.rest(s3__31386)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__31393__delegate = function (f,c1,c2,c3,colls){
var step__31391 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__31390 = map.cljs$lang$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss__31390))
{return cljs.core.cons(map.cljs$lang$arity$2(cljs.core.first,ss__31390),step(map.cljs$lang$arity$2(cljs.core.rest,ss__31390)));
} else
{return null;
}
}),null));
});
return map.cljs$lang$arity$2((function (p1__31195_SHARP_){
return cljs.core.apply.cljs$lang$arity$2(f,p1__31195_SHARP_);
}),(step__31391.cljs$lang$arity$1 ? step__31391.cljs$lang$arity$1(cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))) : step__31391.call(null,cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0)))));
};
var G__31393 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__31393__delegate.call(this, f, c1, c2, c3, colls);
};
G__31393.cljs$lang$maxFixedArity = 4;
G__31393.cljs$lang$applyTo = (function (arglist__31394){
var f = cljs.core.first(arglist__31394);
var c1 = cljs.core.first(cljs.core.next(arglist__31394));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31394)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31394))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31394))));
return G__31393__delegate(f, c1, c2, c3, colls);
});
G__31393.cljs$lang$arity$variadic = G__31393__delegate;
return G__31393;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4088__auto____31397 = cljs.core.seq(coll);
if(temp__4088__auto____31397)
{var s__31398 = temp__4088__auto____31397;
return cljs.core.cons(cljs.core.first(s__31398),take((n - 1),cljs.core.rest(s__31398)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__31404 = (function (n,coll){
while(true){
var s__31402 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3937__auto____31403 = (n > 0);
if(and__3937__auto____31403)
{return s__31402;
} else
{return and__3937__auto____31403;
}
})()))
{{
var G__31405 = (n - 1);
var G__31406 = cljs.core.rest(s__31402);
n = G__31405;
coll = G__31406;
continue;
}
} else
{return s__31402;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__31404.cljs$lang$arity$2 ? step__31404.cljs$lang$arity$2(n,coll) : step__31404.call(null,n,coll));
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$lang$arity$2(1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$lang$arity$3((function (x,_){
return x;
}),s,cljs.core.drop(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__31409 = cljs.core.seq(coll);
var lead__31410 = cljs.core.seq(cljs.core.drop(n,coll));
while(true){
if(lead__31410)
{{
var G__31411 = cljs.core.next(s__31409);
var G__31412 = cljs.core.next(lead__31410);
s__31409 = G__31411;
lead__31410 = G__31412;
continue;
}
} else
{return s__31409;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__31418 = (function (pred,coll){
while(true){
var s__31416 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3937__auto____31417 = s__31416;
if(and__3937__auto____31417)
{return (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__31416)) : pred.call(null,cljs.core.first(s__31416)));
} else
{return and__3937__auto____31417;
}
})()))
{{
var G__31419 = pred;
var G__31420 = cljs.core.rest(s__31416);
pred = G__31419;
coll = G__31420;
continue;
}
} else
{return s__31416;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__31418.cljs$lang$arity$2 ? step__31418.cljs$lang$arity$2(pred,coll) : step__31418.call(null,pred,coll));
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____31423 = cljs.core.seq(coll);
if(temp__4088__auto____31423)
{var s__31424 = temp__4088__auto____31423;
return cljs.core.concat.cljs$lang$arity$2(s__31424,cycle(s__31424));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take(n,coll),cljs.core.drop(n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(x,repeat.cljs$lang$arity$1(x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take(n,repeat.cljs$lang$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take(n,cljs.core.repeat.cljs$lang$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),repeatedly.cljs$lang$arity$1(f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take(n,repeatedly.cljs$lang$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,false,(function (){
return iterate(f,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__31429 = cljs.core.seq(c1);
var s2__31430 = cljs.core.seq(c2);
if((function (){var and__3937__auto____31431 = s1__31429;
if(and__3937__auto____31431)
{return s2__31430;
} else
{return and__3937__auto____31431;
}
})())
{return cljs.core.cons(cljs.core.first(s1__31429),cljs.core.cons(cljs.core.first(s2__31430),interleave.cljs$lang$arity$2(cljs.core.rest(s1__31429),cljs.core.rest(s2__31430))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__31433__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__31432 = cljs.core.map.cljs$lang$arity$2(cljs.core.seq,cljs.core.conj.cljs$lang$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss__31432))
{return cljs.core.concat.cljs$lang$arity$2(cljs.core.map.cljs$lang$arity$2(cljs.core.first,ss__31432),cljs.core.apply.cljs$lang$arity$2(interleave,cljs.core.map.cljs$lang$arity$2(cljs.core.rest,ss__31432)));
} else
{return null;
}
}),null));
};
var G__31433 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__31433__delegate.call(this, c1, c2, colls);
};
G__31433.cljs$lang$maxFixedArity = 2;
G__31433.cljs$lang$applyTo = (function (arglist__31434){
var c1 = cljs.core.first(arglist__31434);
var c2 = cljs.core.first(cljs.core.next(arglist__31434));
var colls = cljs.core.rest(cljs.core.next(arglist__31434));
return G__31433__delegate(c1, c2, colls);
});
G__31433.cljs$lang$arity$variadic = G__31433__delegate;
return G__31433;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop(1,cljs.core.interleave.cljs$lang$arity$2(cljs.core.repeat.cljs$lang$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__31444 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4086__auto____31442 = cljs.core.seq(coll);
if(temp__4086__auto____31442)
{var coll__31443 = temp__4086__auto____31442;
return cljs.core.cons(cljs.core.first(coll__31443),cat(cljs.core.rest(coll__31443),colls));
} else
{if(cljs.core.seq(colls))
{return cat(cljs.core.first(colls),cljs.core.rest(colls));
} else
{return null;
}
}
}),null));
});
return (cat__31444.cljs$lang$arity$2 ? cat__31444.cljs$lang$arity$2(null,colls) : cat__31444.call(null,null,colls));
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1(cljs.core.map.cljs$lang$arity$2(f,coll));
});
var mapcat__3 = (function() { 
var G__31445__delegate = function (f,coll,colls){
return cljs.core.flatten1(cljs.core.apply.cljs$lang$arity$4(cljs.core.map,f,coll,colls));
};
var G__31445 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__31445__delegate.call(this, f, coll, colls);
};
G__31445.cljs$lang$maxFixedArity = 2;
G__31445.cljs$lang$applyTo = (function (arglist__31446){
var f = cljs.core.first(arglist__31446);
var coll = cljs.core.first(cljs.core.next(arglist__31446));
var colls = cljs.core.rest(cljs.core.next(arglist__31446));
return G__31445__delegate(f, coll, colls);
});
G__31445.cljs$lang$arity$variadic = G__31445__delegate;
return G__31445;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____31456 = cljs.core.seq(coll);
if(temp__4088__auto____31456)
{var s__31457 = temp__4088__auto____31456;
if(cljs.core.chunked_seq_QMARK_(s__31457))
{var c__31458 = cljs.core.chunk_first(s__31457);
var size__31459 = cljs.core.count(c__31458);
var b__31460 = cljs.core.chunk_buffer(size__31459);
var n__2560__auto____31461 = size__31459;
var i__31462 = 0;
while(true){
if((i__31462 < n__2560__auto____31461))
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__31458,i__31462)) : pred.call(null,cljs.core._nth.cljs$lang$arity$2(c__31458,i__31462)))))
{cljs.core.chunk_append(b__31460,cljs.core._nth.cljs$lang$arity$2(c__31458,i__31462));
} else
{}
{
var G__31465 = (i__31462 + 1);
i__31462 = G__31465;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__31460),filter(pred,cljs.core.chunk_rest(s__31457)));
} else
{var f__31463 = cljs.core.first(s__31457);
var r__31464 = cljs.core.rest(s__31457);
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(f__31463) : pred.call(null,f__31463))))
{return cljs.core.cons(f__31463,filter(pred,r__31464));
} else
{return filter(pred,r__31464);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter(cljs.core.complement(pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__31468 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(node,(cljs.core.truth_((branch_QMARK_.cljs$lang$arity$1 ? branch_QMARK_.cljs$lang$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$lang$arity$2(walk,(children.cljs$lang$arity$1 ? children.cljs$lang$arity$1(node) : children.call(null,node))):null));
}),null));
});
return (walk__31468.cljs$lang$arity$1 ? walk__31468.cljs$lang$arity$1(root) : walk__31468.call(null,root));
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter((function (p1__31466_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__31466_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__31472__31473 = to;
if(G__31472__31473)
{if((function (){var or__3939__auto____31474 = (G__31472__31473.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3939__auto____31474)
{return or__3939__auto____31474;
} else
{return G__31472__31473.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__31472__31473.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__31472__31473);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__31472__31473);
}
})())
{return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
return cljs.core.conj_BANG_(v,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(o) : f.call(null,o)));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__31475__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$lang$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__31475 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__31475__delegate.call(this, f, c1, c2, c3, colls);
};
G__31475.cljs$lang$maxFixedArity = 4;
G__31475.cljs$lang$applyTo = (function (arglist__31476){
var f = cljs.core.first(arglist__31476);
var c1 = cljs.core.first(cljs.core.next(arglist__31476));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31476)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31476))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31476))));
return G__31475__delegate(f, c1, c2, c3, colls);
});
G__31475.cljs$lang$arity$variadic = G__31475__delegate;
return G__31475;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(o) : pred.call(null,o))))
{return cljs.core.conj_BANG_(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$lang$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____31483 = cljs.core.seq(coll);
if(temp__4088__auto____31483)
{var s__31484 = temp__4088__auto____31483;
var p__31485 = cljs.core.take(n,s__31484);
if((n === cljs.core.count(p__31485)))
{return cljs.core.cons(p__31485,partition.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__31484)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____31486 = cljs.core.seq(coll);
if(temp__4088__auto____31486)
{var s__31487 = temp__4088__auto____31486;
var p__31488 = cljs.core.take(n,s__31487);
if((n === cljs.core.count(p__31488)))
{return cljs.core.cons(p__31488,partition.cljs$lang$arity$4(n,step,pad,cljs.core.drop(step,s__31487)));
} else
{return cljs.core.list.cljs$lang$arity$1(cljs.core.take(n,cljs.core.concat.cljs$lang$arity$2(p__31488,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__31493 = cljs.core.lookup_sentinel;
var m__31494 = m;
var ks__31495 = cljs.core.seq(ks);
while(true){
if(ks__31495)
{var m__31496 = cljs.core._lookup.cljs$lang$arity$3(m__31494,cljs.core.first(ks__31495),sentinel__31493);
if((sentinel__31493 === m__31496))
{return not_found;
} else
{{
var G__31497 = sentinel__31493;
var G__31498 = m__31496;
var G__31499 = cljs.core.next(ks__31495);
sentinel__31493 = G__31497;
m__31494 = G__31498;
ks__31495 = G__31499;
continue;
}
}
} else
{return m__31494;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__31500,v){
var vec__31505__31506 = p__31500;
var k__31507 = cljs.core.nth.cljs$lang$arity$3(vec__31505__31506,0,null);
var ks__31508 = cljs.core.nthnext(vec__31505__31506,1);
if(cljs.core.truth_(ks__31508))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__31507,assoc_in(cljs.core._lookup.cljs$lang$arity$3(m,k__31507,null),ks__31508,v));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__31507,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__31509,f,args){
var vec__31514__31515 = p__31509;
var k__31516 = cljs.core.nth.cljs$lang$arity$3(vec__31514__31515,0,null);
var ks__31517 = cljs.core.nthnext(vec__31514__31515,1);
if(cljs.core.truth_(ks__31517))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__31516,cljs.core.apply.cljs$lang$arity$5(update_in,cljs.core._lookup.cljs$lang$arity$3(m,k__31516,null),ks__31517,f,args));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__31516,cljs.core.apply.cljs$lang$arity$3(f,cljs.core._lookup.cljs$lang$arity$3(m,k__31516,null),args));
}
};
var update_in = function (m,p__31509,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__31509, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__31518){
var m = cljs.core.first(arglist__31518);
var p__31509 = cljs.core.first(cljs.core.next(arglist__31518));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31518)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31518)));
return update_in__delegate(m, p__31509, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31521 = this;
var h__2225__auto____31522 = this__31521.__hash;
if(!((h__2225__auto____31522 == null)))
{return h__2225__auto____31522;
} else
{var h__2225__auto____31523 = cljs.core.hash_coll(coll);
this__31521.__hash = h__2225__auto____31523;
return h__2225__auto____31523;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__31524 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__31525 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__31526 = this;
var new_array__31527 = this__31526.array.slice();
(new_array__31527[k] = v);
return (new cljs.core.Vector(this__31526.meta,new_array__31527,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__31558 = null;
var G__31558__2 = (function (this_sym31528,k){
var this__31530 = this;
var this_sym31528__31531 = this;
var coll__31532 = this_sym31528__31531;
return coll__31532.cljs$core$ILookup$_lookup$arity$2(coll__31532,k);
});
var G__31558__3 = (function (this_sym31529,k,not_found){
var this__31530 = this;
var this_sym31529__31533 = this;
var coll__31534 = this_sym31529__31533;
return coll__31534.cljs$core$ILookup$_lookup$arity$3(coll__31534,k,not_found);
});
G__31558 = function(this_sym31529,k,not_found){
switch(arguments.length){
case 2:
return G__31558__2.call(this,this_sym31529,k);
case 3:
return G__31558__3.call(this,this_sym31529,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31558;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym31519,args31520){
var this__31535 = this;
return this_sym31519.call.apply(this_sym31519,[this_sym31519].concat(args31520.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__31536 = this;
var new_array__31537 = this__31536.array.slice();
new_array__31537.push(o);
return (new cljs.core.Vector(this__31536.meta,new_array__31537,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__31538 = this;
var this__31539 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__31539], 0));
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__31540 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(this__31540.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__31541 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(this__31541.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31542 = this;
if((this__31542.array.length > 0))
{var vector_seq__31543 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__31542.array.length))
{return cljs.core.cons((this__31542.array[i]),vector_seq((i + 1)));
} else
{return null;
}
}),null));
});
return (vector_seq__31543.cljs$lang$arity$1 ? vector_seq__31543.cljs$lang$arity$1(0) : vector_seq__31543.call(null,0));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31544 = this;
return this__31544.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__31545 = this;
var count__31546 = this__31545.array.length;
if((count__31546 > 0))
{return (this__31545.array[(count__31546 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__31547 = this;
if((this__31547.array.length > 0))
{var new_array__31548 = this__31547.array.slice();
new_array__31548.pop();
return (new cljs.core.Vector(this__31547.meta,new_array__31548,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__31549 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31550 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31551 = this;
return (new cljs.core.Vector(meta,this__31551.array,this__31551.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31552 = this;
return this__31552.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__31553 = this;
if((function (){var and__3937__auto____31554 = (0 <= n);
if(and__3937__auto____31554)
{return (n < this__31553.array.length);
} else
{return and__3937__auto____31554;
}
})())
{return (this__31553.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__31555 = this;
if((function (){var and__3937__auto____31556 = (0 <= n);
if(and__3937__auto____31556)
{return (n < this__31555.array.length);
} else
{return and__3937__auto____31556;
}
})())
{return (this__31555.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31557 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__31557.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2343__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.cljs$lang$arity$1(32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__31560 = pv.cnt;
if((cnt__31560 < 32))
{return 0;
} else
{return (((cnt__31560 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__31566 = level;
var ret__31567 = node;
while(true){
if((ll__31566 === 0))
{return ret__31567;
} else
{var embed__31568 = ret__31567;
var r__31569 = cljs.core.pv_fresh_node(edit);
var ___31570 = cljs.core.pv_aset(r__31569,0,embed__31568);
{
var G__31571 = (ll__31566 - 5);
var G__31572 = r__31569;
ll__31566 = G__31571;
ret__31567 = G__31572;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__31578 = cljs.core.pv_clone_node(parent);
var subidx__31579 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset(ret__31578,subidx__31579,tailnode);
return ret__31578;
} else
{var child__31580 = cljs.core.pv_aget(parent,subidx__31579);
if(!((child__31580 == null)))
{var node_to_insert__31581 = push_tail(pv,(level - 5),child__31580,tailnode);
cljs.core.pv_aset(ret__31578,subidx__31579,node_to_insert__31581);
return ret__31578;
} else
{var node_to_insert__31582 = cljs.core.new_path(null,(level - 5),tailnode);
cljs.core.pv_aset(ret__31578,subidx__31579,node_to_insert__31582);
return ret__31578;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3937__auto____31586 = (0 <= i);
if(and__3937__auto____31586)
{return (i < pv.cnt);
} else
{return and__3937__auto____31586;
}
})())
{if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node__31587 = pv.root;
var level__31588 = pv.shift;
while(true){
if((level__31588 > 0))
{{
var G__31589 = cljs.core.pv_aget(node__31587,((i >>> level__31588) & 31));
var G__31590 = (level__31588 - 5);
node__31587 = G__31589;
level__31588 = G__31590;
continue;
}
} else
{return node__31587.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__31593 = cljs.core.pv_clone_node(node);
if((level === 0))
{cljs.core.pv_aset(ret__31593,(i & 31),val);
return ret__31593;
} else
{var subidx__31594 = ((i >>> level) & 31);
cljs.core.pv_aset(ret__31593,subidx__31594,do_assoc(pv,(level - 5),cljs.core.pv_aget(node,subidx__31594),i,val));
return ret__31593;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__31600 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__31601 = pop_tail(pv,(level - 5),cljs.core.pv_aget(node,subidx__31600));
if((function (){var and__3937__auto____31602 = (new_child__31601 == null);
if(and__3937__auto____31602)
{return (subidx__31600 === 0);
} else
{return and__3937__auto____31602;
}
})())
{return null;
} else
{var ret__31603 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__31603,subidx__31600,new_child__31601);
return ret__31603;
}
} else
{if((subidx__31600 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__31604 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__31604,subidx__31600,null);
return ret__31604;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__31607 = this;
return (new cljs.core.TransientVector(this__31607.cnt,this__31607.shift,cljs.core.tv_editable_root(this__31607.root),cljs.core.tv_editable_tail(this__31607.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31608 = this;
var h__2225__auto____31609 = this__31608.__hash;
if(!((h__2225__auto____31609 == null)))
{return h__2225__auto____31609;
} else
{var h__2225__auto____31610 = cljs.core.hash_coll(coll);
this__31608.__hash = h__2225__auto____31610;
return h__2225__auto____31610;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__31611 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__31612 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__31613 = this;
if((function (){var and__3937__auto____31614 = (0 <= k);
if(and__3937__auto____31614)
{return (k < this__31613.cnt);
} else
{return and__3937__auto____31614;
}
})())
{if((cljs.core.tail_off(coll) <= k))
{var new_tail__31615 = this__31613.tail.slice();
(new_tail__31615[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__31613.meta,this__31613.cnt,this__31613.shift,this__31613.root,new_tail__31615,null));
} else
{return (new cljs.core.PersistentVector(this__31613.meta,this__31613.cnt,this__31613.shift,cljs.core.do_assoc(coll,this__31613.shift,this__31613.root,k,v),this__31613.tail,null));
}
} else
{if((k === this__31613.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__31613.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__31663 = null;
var G__31663__2 = (function (this_sym31616,k){
var this__31618 = this;
var this_sym31616__31619 = this;
var coll__31620 = this_sym31616__31619;
return coll__31620.cljs$core$ILookup$_lookup$arity$2(coll__31620,k);
});
var G__31663__3 = (function (this_sym31617,k,not_found){
var this__31618 = this;
var this_sym31617__31621 = this;
var coll__31622 = this_sym31617__31621;
return coll__31622.cljs$core$ILookup$_lookup$arity$3(coll__31622,k,not_found);
});
G__31663 = function(this_sym31617,k,not_found){
switch(arguments.length){
case 2:
return G__31663__2.call(this,this_sym31617,k);
case 3:
return G__31663__3.call(this,this_sym31617,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31663;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym31605,args31606){
var this__31623 = this;
return this_sym31605.call.apply(this_sym31605,[this_sym31605].concat(args31606.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__31624 = this;
var step_init__31625 = [0,init];
var i__31626 = 0;
while(true){
if((i__31626 < this__31624.cnt))
{var arr__31627 = cljs.core.array_for(v,i__31626);
var len__31628 = arr__31627.length;
var init__31632 = (function (){var j__31629 = 0;
var init__31630 = (step_init__31625[1]);
while(true){
if((j__31629 < len__31628))
{var init__31631 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__31630,(j__31629 + i__31626),(arr__31627[j__31629])) : f.call(null,init__31630,(j__31629 + i__31626),(arr__31627[j__31629])));
if(cljs.core.reduced_QMARK_(init__31631))
{return init__31631;
} else
{{
var G__31664 = (j__31629 + 1);
var G__31665 = init__31631;
j__31629 = G__31664;
init__31630 = G__31665;
continue;
}
}
} else
{(step_init__31625[0] = len__31628);
(step_init__31625[1] = init__31630);
return init__31630;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__31632))
{return cljs.core.deref(init__31632);
} else
{{
var G__31666 = (i__31626 + (step_init__31625[0]));
i__31626 = G__31666;
continue;
}
}
} else
{return (step_init__31625[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__31633 = this;
if(((this__31633.cnt - cljs.core.tail_off(coll)) < 32))
{var new_tail__31634 = this__31633.tail.slice();
new_tail__31634.push(o);
return (new cljs.core.PersistentVector(this__31633.meta,(this__31633.cnt + 1),this__31633.shift,this__31633.root,new_tail__31634,null));
} else
{var root_overflow_QMARK___31635 = ((this__31633.cnt >>> 5) > (1 << this__31633.shift));
var new_shift__31636 = ((root_overflow_QMARK___31635)?(this__31633.shift + 5):this__31633.shift);
var new_root__31638 = ((root_overflow_QMARK___31635)?(function (){var n_r__31637 = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r__31637,0,this__31633.root);
cljs.core.pv_aset(n_r__31637,1,cljs.core.new_path(null,this__31633.shift,(new cljs.core.VectorNode(null,this__31633.tail))));
return n_r__31637;
})():cljs.core.push_tail(coll,this__31633.shift,this__31633.root,(new cljs.core.VectorNode(null,this__31633.tail))));
return (new cljs.core.PersistentVector(this__31633.meta,(this__31633.cnt + 1),new_shift__31636,new_root__31638,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__31639 = this;
if((this__31639.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__31639.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__31640 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__31641 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__31642 = this;
var this__31643 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__31643], 0));
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__31644 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__31645 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31646 = this;
if((this__31646.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.cljs$lang$arity$3(coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31647 = this;
return this__31647.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__31648 = this;
if((this__31648.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__31648.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__31649 = this;
if((this__31649.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__31649.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,this__31649.meta);
} else
{if((1 < (this__31649.cnt - cljs.core.tail_off(coll))))
{return (new cljs.core.PersistentVector(this__31649.meta,(this__31649.cnt - 1),this__31649.shift,this__31649.root,this__31649.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__31650 = cljs.core.array_for(coll,(this__31649.cnt - 2));
var nr__31651 = cljs.core.pop_tail(coll,this__31649.shift,this__31649.root);
var new_root__31652 = (((nr__31651 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__31651);
var cnt_1__31653 = (this__31649.cnt - 1);
if((function (){var and__3937__auto____31654 = (5 < this__31649.shift);
if(and__3937__auto____31654)
{return (cljs.core.pv_aget(new_root__31652,1) == null);
} else
{return and__3937__auto____31654;
}
})())
{return (new cljs.core.PersistentVector(this__31649.meta,cnt_1__31653,(this__31649.shift - 5),cljs.core.pv_aget(new_root__31652,0),new_tail__31650,null));
} else
{return (new cljs.core.PersistentVector(this__31649.meta,cnt_1__31653,this__31649.shift,new_root__31652,new_tail__31650,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__31655 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31656 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31657 = this;
return (new cljs.core.PersistentVector(meta,this__31657.cnt,this__31657.shift,this__31657.root,this__31657.tail,this__31657.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31658 = this;
return this__31658.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__31659 = this;
return (cljs.core.array_for(coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__31660 = this;
if((function (){var and__3937__auto____31661 = (0 <= n);
if(and__3937__auto____31661)
{return (n < this__31660.cnt);
} else
{return and__3937__auto____31661;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31662 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__31662.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node(null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__31667 = xs.length;
var xs__31668 = (((no_clone === true))?xs:xs.slice());
if((l__31667 < 32))
{return (new cljs.core.PersistentVector(null,l__31667,5,cljs.core.PersistentVector.EMPTY_NODE,xs__31668,null));
} else
{var node__31669 = xs__31668.slice(0,32);
var v__31670 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__31669,null));
var i__31671 = 32;
var out__31672 = cljs.core._as_transient(v__31670);
while(true){
if((i__31671 < l__31667))
{{
var G__31673 = (i__31671 + 1);
var G__31674 = cljs.core.conj_BANG_(out__31672,(xs__31668[i__31671]));
i__31671 = G__31673;
out__31672 = G__31674;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__31672);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec(args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__31675){
var args = cljs.core.seq(arglist__31675);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__31676 = this;
if(((this__31676.off + 1) < this__31676.node.length))
{var s__31677 = cljs.core.chunked_seq.cljs$lang$arity$4(this__31676.vec,this__31676.node,this__31676.i,(this__31676.off + 1));
if((s__31677 == null))
{return null;
} else
{return s__31677;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__31678 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31679 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__31680 = this;
return (this__31680.node[this__31680.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__31681 = this;
if(((this__31681.off + 1) < this__31681.node.length))
{var s__31682 = cljs.core.chunked_seq.cljs$lang$arity$4(this__31681.vec,this__31681.node,this__31681.i,(this__31681.off + 1));
if((s__31682 == null))
{return cljs.core.List.EMPTY;
} else
{return s__31682;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__31683 = this;
var l__31684 = this__31683.node.length;
var s__31685 = ((((this__31683.i + l__31684) < cljs.core._count(this__31683.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__31683.vec,(this__31683.i + l__31684),0):null);
if((s__31685 == null))
{return null;
} else
{return s__31685;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31686 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__31687 = this;
return cljs.core.chunked_seq.cljs$lang$arity$5(this__31687.vec,this__31687.node,this__31687.i,this__31687.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__31688 = this;
return this__31688.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31689 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__31689.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__31690 = this;
return cljs.core.array_chunk.cljs$lang$arity$2(this__31690.node,this__31690.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__31691 = this;
var l__31692 = this__31691.node.length;
var s__31693 = ((((this__31691.i + l__31692) < cljs.core._count(this__31691.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__31691.vec,(this__31691.i + l__31692),0):null);
if((s__31693 == null))
{return cljs.core.List.EMPTY;
} else
{return s__31693;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.cljs$lang$arity$5(vec,cljs.core.array_for(vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.cljs$lang$arity$5(vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31696 = this;
var h__2225__auto____31697 = this__31696.__hash;
if(!((h__2225__auto____31697 == null)))
{return h__2225__auto____31697;
} else
{var h__2225__auto____31698 = cljs.core.hash_coll(coll);
this__31696.__hash = h__2225__auto____31698;
return h__2225__auto____31698;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__31699 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__31700 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__31701 = this;
var v_pos__31702 = (this__31701.start + key);
return (new cljs.core.Subvec(this__31701.meta,cljs.core._assoc(this__31701.v,v_pos__31702,val),this__31701.start,((this__31701.end > (v_pos__31702 + 1)) ? this__31701.end : (v_pos__31702 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__31728 = null;
var G__31728__2 = (function (this_sym31703,k){
var this__31705 = this;
var this_sym31703__31706 = this;
var coll__31707 = this_sym31703__31706;
return coll__31707.cljs$core$ILookup$_lookup$arity$2(coll__31707,k);
});
var G__31728__3 = (function (this_sym31704,k,not_found){
var this__31705 = this;
var this_sym31704__31708 = this;
var coll__31709 = this_sym31704__31708;
return coll__31709.cljs$core$ILookup$_lookup$arity$3(coll__31709,k,not_found);
});
G__31728 = function(this_sym31704,k,not_found){
switch(arguments.length){
case 2:
return G__31728__2.call(this,this_sym31704,k);
case 3:
return G__31728__3.call(this,this_sym31704,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31728;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym31694,args31695){
var this__31710 = this;
return this_sym31694.call.apply(this_sym31694,[this_sym31694].concat(args31695.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__31711 = this;
return (new cljs.core.Subvec(this__31711.meta,cljs.core._assoc_n(this__31711.v,this__31711.end,o),this__31711.start,(this__31711.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__31712 = this;
var this__31713 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__31713], 0));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__31714 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__31715 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31716 = this;
var subvec_seq__31717 = (function subvec_seq(i){
if((i === this__31716.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$lang$arity$2(this__31716.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq((i + 1));
}),null)));
}
});
return (subvec_seq__31717.cljs$lang$arity$1 ? subvec_seq__31717.cljs$lang$arity$1(this__31716.start) : subvec_seq__31717.call(null,this__31716.start));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31718 = this;
return (this__31718.end - this__31718.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__31719 = this;
return cljs.core._nth.cljs$lang$arity$2(this__31719.v,(this__31719.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__31720 = this;
if((this__31720.start === this__31720.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__31720.meta,this__31720.v,this__31720.start,(this__31720.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__31721 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31722 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31723 = this;
return (new cljs.core.Subvec(meta,this__31723.v,this__31723.start,this__31723.end,this__31723.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31724 = this;
return this__31724.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__31725 = this;
return cljs.core._nth.cljs$lang$arity$2(this__31725.v,(this__31725.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__31726 = this;
return cljs.core._nth.cljs$lang$arity$3(this__31726.v,(this__31726.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31727 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__31727.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$lang$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__31730 = cljs.core.make_array.cljs$lang$arity$1(32);
cljs.core.array_copy(tl,0,ret__31730,0,tl.length);
return ret__31730;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__31734 = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx__31735 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset(ret__31734,subidx__31735,(((level === 5))?tail_node:(function (){var child__31736 = cljs.core.pv_aget(ret__31734,subidx__31735);
if(!((child__31736 == null)))
{return tv_push_tail(tv,(level - 5),child__31736,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__31734;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__31741 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx__31742 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__31743 = tv_pop_tail(tv,(level - 5),cljs.core.pv_aget(node__31741,subidx__31742));
if((function (){var and__3937__auto____31744 = (new_child__31743 == null);
if(and__3937__auto____31744)
{return (subidx__31742 === 0);
} else
{return and__3937__auto____31744;
}
})())
{return null;
} else
{cljs.core.pv_aset(node__31741,subidx__31742,new_child__31743);
return node__31741;
}
} else
{if((subidx__31742 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset(node__31741,subidx__31742,null);
return node__31741;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3937__auto____31749 = (0 <= i);
if(and__3937__auto____31749)
{return (i < tv.cnt);
} else
{return and__3937__auto____31749;
}
})())
{if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root__31750 = tv.root;
var node__31751 = root__31750;
var level__31752 = tv.shift;
while(true){
if((level__31752 > 0))
{{
var G__31753 = cljs.core.tv_ensure_editable(root__31750.edit,cljs.core.pv_aget(node__31751,((i >>> level__31752) & 31)));
var G__31754 = (level__31752 - 5);
node__31751 = G__31753;
level__31752 = G__31754;
continue;
}
} else
{return node__31751.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__31794 = null;
var G__31794__2 = (function (this_sym31757,k){
var this__31759 = this;
var this_sym31757__31760 = this;
var coll__31761 = this_sym31757__31760;
return coll__31761.cljs$core$ILookup$_lookup$arity$2(coll__31761,k);
});
var G__31794__3 = (function (this_sym31758,k,not_found){
var this__31759 = this;
var this_sym31758__31762 = this;
var coll__31763 = this_sym31758__31762;
return coll__31763.cljs$core$ILookup$_lookup$arity$3(coll__31763,k,not_found);
});
G__31794 = function(this_sym31758,k,not_found){
switch(arguments.length){
case 2:
return G__31794__2.call(this,this_sym31758,k);
case 3:
return G__31794__3.call(this,this_sym31758,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31794;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym31755,args31756){
var this__31764 = this;
return this_sym31755.call.apply(this_sym31755,[this_sym31755].concat(args31756.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__31765 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__31766 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__31767 = this;
if(this__31767.root.edit)
{return (cljs.core.array_for(coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__31768 = this;
if((function (){var and__3937__auto____31769 = (0 <= n);
if(and__3937__auto____31769)
{return (n < this__31768.cnt);
} else
{return and__3937__auto____31769;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31770 = this;
if(this__31770.root.edit)
{return this__31770.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__31771 = this;
if(this__31771.root.edit)
{if((function (){var and__3937__auto____31772 = (0 <= n);
if(and__3937__auto____31772)
{return (n < this__31771.cnt);
} else
{return and__3937__auto____31772;
}
})())
{if((cljs.core.tail_off(tcoll) <= n))
{(this__31771.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__31777 = (function go(level,node){
var node__31775 = cljs.core.tv_ensure_editable(this__31771.root.edit,node);
if((level === 0))
{cljs.core.pv_aset(node__31775,(n & 31),val);
return node__31775;
} else
{var subidx__31776 = ((n >>> level) & 31);
cljs.core.pv_aset(node__31775,subidx__31776,go((level - 5),cljs.core.pv_aget(node__31775,subidx__31776)));
return node__31775;
}
}).call(null,this__31771.shift,this__31771.root);
this__31771.root = new_root__31777;
return tcoll;
}
} else
{if((n === this__31771.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__31771.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__31778 = this;
if(this__31778.root.edit)
{if((this__31778.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__31778.cnt))
{this__31778.cnt = 0;
return tcoll;
} else
{if((((this__31778.cnt - 1) & 31) > 0))
{this__31778.cnt = (this__31778.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__31779 = cljs.core.editable_array_for(tcoll,(this__31778.cnt - 2));
var new_root__31781 = (function (){var nr__31780 = cljs.core.tv_pop_tail(tcoll,this__31778.shift,this__31778.root);
if(!((nr__31780 == null)))
{return nr__31780;
} else
{return (new cljs.core.VectorNode(this__31778.root.edit,cljs.core.make_array.cljs$lang$arity$1(32)));
}
})();
if((function (){var and__3937__auto____31782 = (5 < this__31778.shift);
if(and__3937__auto____31782)
{return (cljs.core.pv_aget(new_root__31781,1) == null);
} else
{return and__3937__auto____31782;
}
})())
{var new_root__31783 = cljs.core.tv_ensure_editable(this__31778.root.edit,cljs.core.pv_aget(new_root__31781,0));
this__31778.root = new_root__31783;
this__31778.shift = (this__31778.shift - 5);
this__31778.cnt = (this__31778.cnt - 1);
this__31778.tail = new_tail__31779;
return tcoll;
} else
{this__31778.root = new_root__31781;
this__31778.cnt = (this__31778.cnt - 1);
this__31778.tail = new_tail__31779;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__31784 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__31785 = this;
if(this__31785.root.edit)
{if(((this__31785.cnt - cljs.core.tail_off(tcoll)) < 32))
{(this__31785.tail[(this__31785.cnt & 31)] = o);
this__31785.cnt = (this__31785.cnt + 1);
return tcoll;
} else
{var tail_node__31786 = (new cljs.core.VectorNode(this__31785.root.edit,this__31785.tail));
var new_tail__31787 = cljs.core.make_array.cljs$lang$arity$1(32);
(new_tail__31787[0] = o);
this__31785.tail = new_tail__31787;
if(((this__31785.cnt >>> 5) > (1 << this__31785.shift)))
{var new_root_array__31788 = cljs.core.make_array.cljs$lang$arity$1(32);
var new_shift__31789 = (this__31785.shift + 5);
(new_root_array__31788[0] = this__31785.root);
(new_root_array__31788[1] = cljs.core.new_path(this__31785.root.edit,this__31785.shift,tail_node__31786));
this__31785.root = (new cljs.core.VectorNode(this__31785.root.edit,new_root_array__31788));
this__31785.shift = new_shift__31789;
this__31785.cnt = (this__31785.cnt + 1);
return tcoll;
} else
{var new_root__31790 = cljs.core.tv_push_tail(tcoll,this__31785.shift,this__31785.root,tail_node__31786);
this__31785.root = new_root__31790;
this__31785.cnt = (this__31785.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__31791 = this;
if(this__31791.root.edit)
{this__31791.root.edit = null;
var len__31792 = (this__31791.cnt - cljs.core.tail_off(tcoll));
var trimmed_tail__31793 = cljs.core.make_array.cljs$lang$arity$1(len__31792);
cljs.core.array_copy(this__31791.tail,0,trimmed_tail__31793,0,len__31792);
return (new cljs.core.PersistentVector(null,this__31791.cnt,this__31791.shift,this__31791.root,trimmed_tail__31793,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31795 = this;
var h__2225__auto____31796 = this__31795.__hash;
if(!((h__2225__auto____31796 == null)))
{return h__2225__auto____31796;
} else
{var h__2225__auto____31797 = cljs.core.hash_coll(coll);
this__31795.__hash = h__2225__auto____31797;
return h__2225__auto____31797;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__31798 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__31799 = this;
var this__31800 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__31800], 0));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31801 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__31802 = this;
return cljs.core._first(this__31802.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__31803 = this;
var temp__4086__auto____31804 = cljs.core.next(this__31803.front);
if(temp__4086__auto____31804)
{var f1__31805 = temp__4086__auto____31804;
return (new cljs.core.PersistentQueueSeq(this__31803.meta,f1__31805,this__31803.rear,null));
} else
{if((this__31803.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__31803.meta,this__31803.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31806 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31807 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__31807.front,this__31807.rear,this__31807.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31808 = this;
return this__31808.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31809 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__31809.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31810 = this;
var h__2225__auto____31811 = this__31810.__hash;
if(!((h__2225__auto____31811 == null)))
{return h__2225__auto____31811;
} else
{var h__2225__auto____31812 = cljs.core.hash_coll(coll);
this__31810.__hash = h__2225__auto____31812;
return h__2225__auto____31812;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__31813 = this;
if(cljs.core.truth_(this__31813.front))
{return (new cljs.core.PersistentQueue(this__31813.meta,(this__31813.count + 1),this__31813.front,cljs.core.conj.cljs$lang$arity$2((function (){var or__3939__auto____31814 = this__31813.rear;
if(cljs.core.truth_(or__3939__auto____31814))
{return or__3939__auto____31814;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__31813.meta,(this__31813.count + 1),cljs.core.conj.cljs$lang$arity$2(this__31813.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__31815 = this;
var this__31816 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__31816], 0));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31817 = this;
var rear__31818 = cljs.core.seq(this__31817.rear);
if(cljs.core.truth_((function (){var or__3939__auto____31819 = this__31817.front;
if(cljs.core.truth_(or__3939__auto____31819))
{return or__3939__auto____31819;
} else
{return rear__31818;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__31817.front,cljs.core.seq(rear__31818),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31820 = this;
return this__31820.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__31821 = this;
return cljs.core._first(this__31821.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__31822 = this;
if(cljs.core.truth_(this__31822.front))
{var temp__4086__auto____31823 = cljs.core.next(this__31822.front);
if(temp__4086__auto____31823)
{var f1__31824 = temp__4086__auto____31823;
return (new cljs.core.PersistentQueue(this__31822.meta,(this__31822.count - 1),f1__31824,this__31822.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__31822.meta,(this__31822.count - 1),cljs.core.seq(this__31822.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__31825 = this;
return cljs.core.first(this__31825.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__31826 = this;
return cljs.core.rest(cljs.core.seq(coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31827 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31828 = this;
return (new cljs.core.PersistentQueue(meta,this__31828.count,this__31828.front,this__31828.rear,this__31828.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31829 = this;
return this__31829.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31830 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__31831 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$lang$arity$2((function (xkv){
return cljs.core._EQ_.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__31834 = array.length;
var i__31835 = 0;
while(true){
if((i__31835 < len__31834))
{if((k === (array[i__31835])))
{return i__31835;
} else
{{
var G__31836 = (i__31835 + incr);
i__31835 = G__31836;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__31839 = cljs.core.hash.cljs$lang$arity$1(a);
var b__31840 = cljs.core.hash.cljs$lang$arity$1(b);
if((a__31839 < b__31840))
{return -1;
} else
{if((a__31839 > b__31840))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__31848 = m.keys;
var len__31849 = ks__31848.length;
var so__31850 = m.strobj;
var out__31851 = cljs.core.with_meta(cljs.core.PersistentHashMap.EMPTY,cljs.core.meta(m));
var i__31852 = 0;
var out__31853 = cljs.core.transient$(out__31851);
while(true){
if((i__31852 < len__31849))
{var k__31854 = (ks__31848[i__31852]);
{
var G__31855 = (i__31852 + 1);
var G__31856 = cljs.core.assoc_BANG_(out__31853,k__31854,(so__31850[k__31854]));
i__31852 = G__31855;
out__31853 = G__31856;
continue;
}
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(out__31853,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__31862 = {};
var l__31863 = ks.length;
var i__31864 = 0;
while(true){
if((i__31864 < l__31863))
{var k__31865 = (ks[i__31864]);
(new_obj__31862[k__31865] = (obj[k__31865]));
{
var G__31866 = (i__31864 + 1);
i__31864 = G__31866;
continue;
}
} else
{}
break;
}
return new_obj__31862;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__31869 = this;
return cljs.core.transient$(cljs.core.into(cljs.core.hash_map(),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31870 = this;
var h__2225__auto____31871 = this__31870.__hash;
if(!((h__2225__auto____31871 == null)))
{return h__2225__auto____31871;
} else
{var h__2225__auto____31872 = cljs.core.hash_imap(coll);
this__31870.__hash = h__2225__auto____31872;
return h__2225__auto____31872;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__31873 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__31874 = this;
if((function (){var and__3937__auto____31875 = goog.isString(k);
if(and__3937__auto____31875)
{return !((cljs.core.scan_array(1,k,this__31874.keys) == null));
} else
{return and__3937__auto____31875;
}
})())
{return (this__31874.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__31876 = this;
if(goog.isString(k))
{if((function (){var or__3939__auto____31877 = (this__31876.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3939__auto____31877)
{return or__3939__auto____31877;
} else
{return (this__31876.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
} else
{if(!((cljs.core.scan_array(1,k,this__31876.keys) == null)))
{var new_strobj__31878 = cljs.core.obj_clone(this__31876.strobj,this__31876.keys);
(new_strobj__31878[k] = v);
return (new cljs.core.ObjMap(this__31876.meta,this__31876.keys,new_strobj__31878,(this__31876.update_count + 1),null));
} else
{var new_strobj__31879 = cljs.core.obj_clone(this__31876.strobj,this__31876.keys);
var new_keys__31880 = this__31876.keys.slice();
(new_strobj__31879[k] = v);
new_keys__31880.push(k);
return (new cljs.core.ObjMap(this__31876.meta,new_keys__31880,new_strobj__31879,(this__31876.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__31881 = this;
if((function (){var and__3937__auto____31882 = goog.isString(k);
if(and__3937__auto____31882)
{return !((cljs.core.scan_array(1,k,this__31881.keys) == null));
} else
{return and__3937__auto____31882;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__31904 = null;
var G__31904__2 = (function (this_sym31883,k){
var this__31885 = this;
var this_sym31883__31886 = this;
var coll__31887 = this_sym31883__31886;
return coll__31887.cljs$core$ILookup$_lookup$arity$2(coll__31887,k);
});
var G__31904__3 = (function (this_sym31884,k,not_found){
var this__31885 = this;
var this_sym31884__31888 = this;
var coll__31889 = this_sym31884__31888;
return coll__31889.cljs$core$ILookup$_lookup$arity$3(coll__31889,k,not_found);
});
G__31904 = function(this_sym31884,k,not_found){
switch(arguments.length){
case 2:
return G__31904__2.call(this,this_sym31884,k);
case 3:
return G__31904__3.call(this,this_sym31884,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31904;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym31867,args31868){
var this__31890 = this;
return this_sym31867.call.apply(this_sym31867,[this_sym31867].concat(args31868.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__31891 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__31892 = this;
var this__31893 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__31893], 0));
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31894 = this;
if((this__31894.keys.length > 0))
{return cljs.core.map.cljs$lang$arity$2((function (p1__31857_SHARP_){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([p1__31857_SHARP_,(this__31894.strobj[p1__31857_SHARP_])], 0));
}),this__31894.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31895 = this;
return this__31895.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31896 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31897 = this;
return (new cljs.core.ObjMap(meta,this__31897.keys,this__31897.strobj,this__31897.update_count,this__31897.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31898 = this;
return this__31898.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31899 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,this__31899.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__31900 = this;
if((function (){var and__3937__auto____31901 = goog.isString(k);
if(and__3937__auto____31901)
{return !((cljs.core.scan_array(1,k,this__31900.keys) == null));
} else
{return and__3937__auto____31901;
}
})())
{var new_keys__31902 = this__31900.keys.slice();
var new_strobj__31903 = cljs.core.obj_clone(this__31900.strobj,this__31900.keys);
new_keys__31902.splice(cljs.core.scan_array(1,k,new_keys__31902),1);
cljs.core.js_delete(new_strobj__31903,k);
return (new cljs.core.ObjMap(this__31900.meta,new_keys__31902,new_strobj__31903,(this__31900.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31908 = this;
var h__2225__auto____31909 = this__31908.__hash;
if(!((h__2225__auto____31909 == null)))
{return h__2225__auto____31909;
} else
{var h__2225__auto____31910 = cljs.core.hash_imap(coll);
this__31908.__hash = h__2225__auto____31910;
return h__2225__auto____31910;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__31911 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__31912 = this;
var bucket__31913 = (this__31912.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__31914 = (cljs.core.truth_(bucket__31913)?cljs.core.scan_array(2,k,bucket__31913):null);
if(cljs.core.truth_(i__31914))
{return (bucket__31913[(i__31914 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__31915 = this;
var h__31916 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__31917 = (this__31915.hashobj[h__31916]);
if(cljs.core.truth_(bucket__31917))
{var new_bucket__31918 = bucket__31917.slice();
var new_hashobj__31919 = goog.object.clone(this__31915.hashobj);
(new_hashobj__31919[h__31916] = new_bucket__31918);
var temp__4086__auto____31920 = cljs.core.scan_array(2,k,new_bucket__31918);
if(cljs.core.truth_(temp__4086__auto____31920))
{var i__31921 = temp__4086__auto____31920;
(new_bucket__31918[(i__31921 + 1)] = v);
return (new cljs.core.HashMap(this__31915.meta,this__31915.count,new_hashobj__31919,null));
} else
{new_bucket__31918.push(k,v);
return (new cljs.core.HashMap(this__31915.meta,(this__31915.count + 1),new_hashobj__31919,null));
}
} else
{var new_hashobj__31922 = goog.object.clone(this__31915.hashobj);
(new_hashobj__31922[h__31916] = [k,v]);
return (new cljs.core.HashMap(this__31915.meta,(this__31915.count + 1),new_hashobj__31922,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__31923 = this;
var bucket__31924 = (this__31923.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__31925 = (cljs.core.truth_(bucket__31924)?cljs.core.scan_array(2,k,bucket__31924):null);
if(cljs.core.truth_(i__31925))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__31950 = null;
var G__31950__2 = (function (this_sym31926,k){
var this__31928 = this;
var this_sym31926__31929 = this;
var coll__31930 = this_sym31926__31929;
return coll__31930.cljs$core$ILookup$_lookup$arity$2(coll__31930,k);
});
var G__31950__3 = (function (this_sym31927,k,not_found){
var this__31928 = this;
var this_sym31927__31931 = this;
var coll__31932 = this_sym31927__31931;
return coll__31932.cljs$core$ILookup$_lookup$arity$3(coll__31932,k,not_found);
});
G__31950 = function(this_sym31927,k,not_found){
switch(arguments.length){
case 2:
return G__31950__2.call(this,this_sym31927,k);
case 3:
return G__31950__3.call(this,this_sym31927,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31950;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym31906,args31907){
var this__31933 = this;
return this_sym31906.call.apply(this_sym31906,[this_sym31906].concat(args31907.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__31934 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__31935 = this;
var this__31936 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__31936], 0));
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31937 = this;
if((this__31937.count > 0))
{var hashes__31938 = cljs.core.js_keys(this__31937.hashobj).sort();
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__31905_SHARP_){
return cljs.core.map.cljs$lang$arity$2(cljs.core.vec,cljs.core.partition.cljs$lang$arity$2(2,(this__31937.hashobj[p1__31905_SHARP_])));
}),hashes__31938);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31939 = this;
return this__31939.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31940 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31941 = this;
return (new cljs.core.HashMap(meta,this__31941.count,this__31941.hashobj,this__31941.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31942 = this;
return this__31942.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31943 = this;
return cljs.core.with_meta(cljs.core.HashMap.EMPTY,this__31943.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__31944 = this;
var h__31945 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__31946 = (this__31944.hashobj[h__31945]);
var i__31947 = (cljs.core.truth_(bucket__31946)?cljs.core.scan_array(2,k,bucket__31946):null);
if(cljs.core.not(i__31947))
{return coll;
} else
{var new_hashobj__31948 = goog.object.clone(this__31944.hashobj);
if((3 > bucket__31946.length))
{cljs.core.js_delete(new_hashobj__31948,h__31945);
} else
{var new_bucket__31949 = bucket__31946.slice();
new_bucket__31949.splice(i__31947,2);
(new_hashobj__31948[h__31945] = new_bucket__31949);
}
return (new cljs.core.HashMap(this__31944.meta,(this__31944.count - 1),new_hashobj__31948,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__31951 = ks.length;
var i__31952 = 0;
var out__31953 = cljs.core.HashMap.EMPTY;
while(true){
if((i__31952 < len__31951))
{{
var G__31954 = (i__31952 + 1);
var G__31955 = cljs.core.assoc.cljs$lang$arity$3(out__31953,(ks[i__31952]),(vs[i__31952]));
i__31952 = G__31954;
out__31953 = G__31955;
continue;
}
} else
{return out__31953;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__31959 = m.arr;
var len__31960 = arr__31959.length;
var i__31961 = 0;
while(true){
if((len__31960 <= i__31961))
{return -1;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((arr__31959[i__31961]),k))
{return i__31961;
} else
{if("\uFDD0'else")
{{
var G__31962 = (i__31961 + 2);
i__31961 = G__31962;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__31965 = this;
return (new cljs.core.TransientArrayMap({},this__31965.arr.length,this__31965.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31966 = this;
var h__2225__auto____31967 = this__31966.__hash;
if(!((h__2225__auto____31967 == null)))
{return h__2225__auto____31967;
} else
{var h__2225__auto____31968 = cljs.core.hash_imap(coll);
this__31966.__hash = h__2225__auto____31968;
return h__2225__auto____31968;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__31969 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__31970 = this;
var idx__31971 = cljs.core.array_map_index_of(coll,k);
if((idx__31971 === -1))
{return not_found;
} else
{return (this__31970.arr[(idx__31971 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__31972 = this;
var idx__31973 = cljs.core.array_map_index_of(coll,k);
if((idx__31973 === -1))
{if((this__31972.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__31972.meta,(this__31972.cnt + 1),(function (){var G__31974__31975 = this__31972.arr.slice();
G__31974__31975.push(k);
G__31974__31975.push(v);
return G__31974__31975;
})(),null));
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(cljs.core.transient$(cljs.core.into(cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__31972.arr[(idx__31973 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__31972.meta,this__31972.cnt,(function (){var G__31976__31977 = this__31972.arr.slice();
(G__31976__31977[(idx__31973 + 1)] = v);
return G__31976__31977;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__31978 = this;
return !((cljs.core.array_map_index_of(coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__32010 = null;
var G__32010__2 = (function (this_sym31979,k){
var this__31981 = this;
var this_sym31979__31982 = this;
var coll__31983 = this_sym31979__31982;
return coll__31983.cljs$core$ILookup$_lookup$arity$2(coll__31983,k);
});
var G__32010__3 = (function (this_sym31980,k,not_found){
var this__31981 = this;
var this_sym31980__31984 = this;
var coll__31985 = this_sym31980__31984;
return coll__31985.cljs$core$ILookup$_lookup$arity$3(coll__31985,k,not_found);
});
G__32010 = function(this_sym31980,k,not_found){
switch(arguments.length){
case 2:
return G__32010__2.call(this,this_sym31980,k);
case 3:
return G__32010__3.call(this,this_sym31980,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32010;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym31963,args31964){
var this__31986 = this;
return this_sym31963.call.apply(this_sym31963,[this_sym31963].concat(args31964.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__31987 = this;
var len__31988 = this__31987.arr.length;
var i__31989 = 0;
var init__31990 = init;
while(true){
if((i__31989 < len__31988))
{var init__31991 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__31990,(this__31987.arr[i__31989]),(this__31987.arr[(i__31989 + 1)])) : f.call(null,init__31990,(this__31987.arr[i__31989]),(this__31987.arr[(i__31989 + 1)])));
if(cljs.core.reduced_QMARK_(init__31991))
{return cljs.core.deref(init__31991);
} else
{{
var G__32011 = (i__31989 + 2);
var G__32012 = init__31991;
i__31989 = G__32011;
init__31990 = G__32012;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__31992 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__31993 = this;
var this__31994 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__31994], 0));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31995 = this;
if((this__31995.cnt > 0))
{var len__31996 = this__31995.arr.length;
var array_map_seq__31997 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__31996))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([(this__31995.arr[i]),(this__31995.arr[(i + 1)])], true),array_map_seq((i + 2)));
} else
{return null;
}
}),null));
});
return (array_map_seq__31997.cljs$lang$arity$1 ? array_map_seq__31997.cljs$lang$arity$1(0) : array_map_seq__31997.call(null,0));
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31998 = this;
return this__31998.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31999 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__32000 = this;
return (new cljs.core.PersistentArrayMap(meta,this__32000.cnt,this__32000.arr,this__32000.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__32001 = this;
return this__32001.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__32002 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,this__32002.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__32003 = this;
var idx__32004 = cljs.core.array_map_index_of(coll,k);
if((idx__32004 >= 0))
{var len__32005 = this__32003.arr.length;
var new_len__32006 = (len__32005 - 2);
if((new_len__32006 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__32007 = cljs.core.make_array.cljs$lang$arity$1(new_len__32006);
var s__32008 = 0;
var d__32009 = 0;
while(true){
if((s__32008 >= len__32005))
{return (new cljs.core.PersistentArrayMap(this__32003.meta,(this__32003.cnt - 1),new_arr__32007,null));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(k,(this__32003.arr[s__32008])))
{{
var G__32013 = (s__32008 + 2);
var G__32014 = d__32009;
s__32008 = G__32013;
d__32009 = G__32014;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__32007[d__32009] = (this__32003.arr[s__32008]));
(new_arr__32007[(d__32009 + 1)] = (this__32003.arr[(s__32008 + 1)]));
{
var G__32015 = (s__32008 + 2);
var G__32016 = (d__32009 + 2);
s__32008 = G__32015;
d__32009 = G__32016;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__32017 = cljs.core.count(ks);
var i__32018 = 0;
var out__32019 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__32018 < len__32017))
{{
var G__32020 = (i__32018 + 1);
var G__32021 = cljs.core.assoc_BANG_(out__32019,(ks[i__32018]),(vs[i__32018]));
i__32018 = G__32020;
out__32019 = G__32021;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__32019);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__32022 = this;
if(cljs.core.truth_(this__32022.editable_QMARK_))
{var idx__32023 = cljs.core.array_map_index_of(tcoll,key);
if((idx__32023 >= 0))
{(this__32022.arr[idx__32023] = (this__32022.arr[(this__32022.len - 2)]));
(this__32022.arr[(idx__32023 + 1)] = (this__32022.arr[(this__32022.len - 1)]));
var G__32024__32025 = this__32022.arr;
G__32024__32025.pop();
G__32024__32025.pop();
G__32024__32025;
this__32022.len = (this__32022.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__32026 = this;
if(cljs.core.truth_(this__32026.editable_QMARK_))
{var idx__32027 = cljs.core.array_map_index_of(tcoll,key);
if((idx__32027 === -1))
{if(((this__32026.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__32026.len = (this__32026.len + 2);
this__32026.arr.push(key);
this__32026.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_(cljs.core.array__GT_transient_hash_map(this__32026.len,this__32026.arr),key,val);
}
} else
{if((val === (this__32026.arr[(idx__32027 + 1)])))
{return tcoll;
} else
{(this__32026.arr[(idx__32027 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__32028 = this;
if(cljs.core.truth_(this__32028.editable_QMARK_))
{if((function (){var G__32029__32030 = o;
if(G__32029__32030)
{if((function (){var or__3939__auto____32031 = (G__32029__32030.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3939__auto____32031)
{return or__3939__auto____32031;
} else
{return G__32029__32030.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__32029__32030.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__32029__32030);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__32029__32030);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key(o),cljs.core.val(o));
} else
{var es__32032 = cljs.core.seq(o);
var tcoll__32033 = tcoll;
while(true){
var temp__4086__auto____32034 = cljs.core.first(es__32032);
if(cljs.core.truth_(temp__4086__auto____32034))
{var e__32035 = temp__4086__auto____32034;
{
var G__32041 = cljs.core.next(es__32032);
var G__32042 = tcoll__32033.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__32033,cljs.core.key(e__32035),cljs.core.val(e__32035));
es__32032 = G__32041;
tcoll__32033 = G__32042;
continue;
}
} else
{return tcoll__32033;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__32036 = this;
if(cljs.core.truth_(this__32036.editable_QMARK_))
{this__32036.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(this__32036.len,2),this__32036.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__32037 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__32038 = this;
if(cljs.core.truth_(this__32038.editable_QMARK_))
{var idx__32039 = cljs.core.array_map_index_of(tcoll,k);
if((idx__32039 === -1))
{return not_found;
} else
{return (this__32038.arr[(idx__32039 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__32040 = this;
if(cljs.core.truth_(this__32040.editable_QMARK_))
{return cljs.core.quot(this__32040.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__32045 = cljs.core.transient$(cljs.core.ObjMap.EMPTY);
var i__32046 = 0;
while(true){
if((i__32046 < len))
{{
var G__32047 = cljs.core.assoc_BANG_(out__32045,(arr[i__32046]),(arr[(i__32046 + 1)]));
var G__32048 = (i__32046 + 2);
out__32045 = G__32047;
i__32046 = G__32048;
continue;
}
} else
{return out__32045;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2343__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.cljs$lang$arity$2(key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__32053__32054 = arr.slice();
(G__32053__32054[i] = a);
return G__32053__32054;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__32055__32056 = arr.slice();
(G__32055__32056[i] = a);
(G__32055__32056[j] = b);
return G__32055__32056;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__32058 = cljs.core.make_array.cljs$lang$arity$1((arr.length - 2));
cljs.core.array_copy(arr,0,new_arr__32058,0,(2 * i));
cljs.core.array_copy(arr,(2 * (i + 1)),new_arr__32058,(2 * i),(new_arr__32058.length - (2 * i)));
return new_arr__32058;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__32061 = inode.ensure_editable(edit);
(editable__32061.arr[i] = a);
return editable__32061;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__32062 = inode.ensure_editable(edit);
(editable__32062.arr[i] = a);
(editable__32062.arr[j] = b);
return editable__32062;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__32069 = arr.length;
var i__32070 = 0;
var init__32071 = init;
while(true){
if((i__32070 < len__32069))
{var init__32074 = (function (){var k__32072 = (arr[i__32070]);
if(!((k__32072 == null)))
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__32071,k__32072,(arr[(i__32070 + 1)])) : f.call(null,init__32071,k__32072,(arr[(i__32070 + 1)])));
} else
{var node__32073 = (arr[(i__32070 + 1)]);
if(!((node__32073 == null)))
{return node__32073.kv_reduce(f,init__32071);
} else
{return init__32071;
}
}
})();
if(cljs.core.reduced_QMARK_(init__32074))
{return cljs.core.deref(init__32074);
} else
{{
var G__32075 = (i__32070 + 2);
var G__32076 = init__32074;
i__32070 = G__32075;
init__32071 = G__32076;
continue;
}
}
} else
{return init__32071;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__32077 = this;
var inode__32078 = this;
if((this__32077.bitmap === bit))
{return null;
} else
{var editable__32079 = inode__32078.ensure_editable(e);
var earr__32080 = editable__32079.arr;
var len__32081 = earr__32080.length;
editable__32079.bitmap = (bit ^ editable__32079.bitmap);
cljs.core.array_copy(earr__32080,(2 * (i + 1)),earr__32080,(2 * i),(len__32081 - (2 * (i + 1))));
(earr__32080[(len__32081 - 2)] = null);
(earr__32080[(len__32081 - 1)] = null);
return editable__32079;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__32082 = this;
var inode__32083 = this;
var bit__32084 = (1 << ((hash >>> shift) & 0x01f));
var idx__32085 = cljs.core.bitmap_indexed_node_index(this__32082.bitmap,bit__32084);
if(((this__32082.bitmap & bit__32084) === 0))
{var n__32086 = cljs.core.bit_count(this__32082.bitmap);
if(((2 * n__32086) < this__32082.arr.length))
{var editable__32087 = inode__32083.ensure_editable(edit);
var earr__32088 = editable__32087.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr__32088,(2 * idx__32085),earr__32088,(2 * (idx__32085 + 1)),(2 * (n__32086 - idx__32085)));
(earr__32088[(2 * idx__32085)] = key);
(earr__32088[((2 * idx__32085) + 1)] = val);
editable__32087.bitmap = (editable__32087.bitmap | bit__32084);
return editable__32087;
} else
{if((n__32086 >= 16))
{var nodes__32089 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__32090 = ((hash >>> shift) & 0x01f);
(nodes__32089[jdx__32090] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__32091 = 0;
var j__32092 = 0;
while(true){
if((i__32091 < 32))
{if((((this__32082.bitmap >>> i__32091) & 1) === 0))
{{
var G__32145 = (i__32091 + 1);
var G__32146 = j__32092;
i__32091 = G__32145;
j__32092 = G__32146;
continue;
}
} else
{(nodes__32089[i__32091] = ((!(((this__32082.arr[j__32092]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.cljs$lang$arity$1((this__32082.arr[j__32092])),(this__32082.arr[j__32092]),(this__32082.arr[(j__32092 + 1)]),added_leaf_QMARK_):(this__32082.arr[(j__32092 + 1)])));
{
var G__32147 = (i__32091 + 1);
var G__32148 = (j__32092 + 2);
i__32091 = G__32147;
j__32092 = G__32148;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__32086 + 1),nodes__32089));
} else
{if("\uFDD0'else")
{var new_arr__32093 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__32086 + 4)));
cljs.core.array_copy(this__32082.arr,0,new_arr__32093,0,(2 * idx__32085));
(new_arr__32093[(2 * idx__32085)] = key);
(new_arr__32093[((2 * idx__32085) + 1)] = val);
cljs.core.array_copy(this__32082.arr,(2 * idx__32085),new_arr__32093,(2 * (idx__32085 + 1)),(2 * (n__32086 - idx__32085)));
added_leaf_QMARK_.val = true;
var editable__32094 = inode__32083.ensure_editable(edit);
editable__32094.arr = new_arr__32093;
editable__32094.bitmap = (editable__32094.bitmap | bit__32084);
return editable__32094;
} else
{return null;
}
}
}
} else
{var key_or_nil__32095 = (this__32082.arr[(2 * idx__32085)]);
var val_or_node__32096 = (this__32082.arr[((2 * idx__32085) + 1)]);
if((key_or_nil__32095 == null))
{var n__32097 = val_or_node__32096.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__32097 === val_or_node__32096))
{return inode__32083;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__32083,edit,((2 * idx__32085) + 1),n__32097);
}
} else
{if(cljs.core.key_test(key,key_or_nil__32095))
{if((val === val_or_node__32096))
{return inode__32083;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__32083,edit,((2 * idx__32085) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$lang$arity$6(inode__32083,edit,(2 * idx__32085),null,((2 * idx__32085) + 1),cljs.core.create_node.cljs$lang$arity$7(edit,(shift + 5),key_or_nil__32095,val_or_node__32096,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__32098 = this;
var inode__32099 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__32098.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__32100 = this;
var inode__32101 = this;
var bit__32102 = (1 << ((hash >>> shift) & 0x01f));
if(((this__32100.bitmap & bit__32102) === 0))
{return inode__32101;
} else
{var idx__32103 = cljs.core.bitmap_indexed_node_index(this__32100.bitmap,bit__32102);
var key_or_nil__32104 = (this__32100.arr[(2 * idx__32103)]);
var val_or_node__32105 = (this__32100.arr[((2 * idx__32103) + 1)]);
if((key_or_nil__32104 == null))
{var n__32106 = val_or_node__32105.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__32106 === val_or_node__32105))
{return inode__32101;
} else
{if(!((n__32106 == null)))
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__32101,edit,((2 * idx__32103) + 1),n__32106);
} else
{if((this__32100.bitmap === bit__32102))
{return null;
} else
{if("\uFDD0'else")
{return inode__32101.edit_and_remove_pair(edit,bit__32102,idx__32103);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__32104))
{(removed_leaf_QMARK_[0] = true);
return inode__32101.edit_and_remove_pair(edit,bit__32102,idx__32103);
} else
{if("\uFDD0'else")
{return inode__32101;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__32107 = this;
var inode__32108 = this;
if((e === this__32107.edit))
{return inode__32108;
} else
{var n__32109 = cljs.core.bit_count(this__32107.bitmap);
var new_arr__32110 = cljs.core.make_array.cljs$lang$arity$1((((n__32109 < 0))?4:(2 * (n__32109 + 1))));
cljs.core.array_copy(this__32107.arr,0,new_arr__32110,0,(2 * n__32109));
return (new cljs.core.BitmapIndexedNode(e,this__32107.bitmap,new_arr__32110));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__32111 = this;
var inode__32112 = this;
return cljs.core.inode_kv_reduce(this__32111.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__32113 = this;
var inode__32114 = this;
var bit__32115 = (1 << ((hash >>> shift) & 0x01f));
if(((this__32113.bitmap & bit__32115) === 0))
{return not_found;
} else
{var idx__32116 = cljs.core.bitmap_indexed_node_index(this__32113.bitmap,bit__32115);
var key_or_nil__32117 = (this__32113.arr[(2 * idx__32116)]);
var val_or_node__32118 = (this__32113.arr[((2 * idx__32116) + 1)]);
if((key_or_nil__32117 == null))
{return val_or_node__32118.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__32117))
{return cljs.core.PersistentVector.fromArray([key_or_nil__32117,val_or_node__32118], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__32119 = this;
var inode__32120 = this;
var bit__32121 = (1 << ((hash >>> shift) & 0x01f));
if(((this__32119.bitmap & bit__32121) === 0))
{return inode__32120;
} else
{var idx__32122 = cljs.core.bitmap_indexed_node_index(this__32119.bitmap,bit__32121);
var key_or_nil__32123 = (this__32119.arr[(2 * idx__32122)]);
var val_or_node__32124 = (this__32119.arr[((2 * idx__32122) + 1)]);
if((key_or_nil__32123 == null))
{var n__32125 = val_or_node__32124.inode_without((shift + 5),hash,key);
if((n__32125 === val_or_node__32124))
{return inode__32120;
} else
{if(!((n__32125 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__32119.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__32119.arr,((2 * idx__32122) + 1),n__32125)));
} else
{if((this__32119.bitmap === bit__32121))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__32119.bitmap ^ bit__32121),cljs.core.remove_pair(this__32119.arr,idx__32122)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__32123))
{return (new cljs.core.BitmapIndexedNode(null,(this__32119.bitmap ^ bit__32121),cljs.core.remove_pair(this__32119.arr,idx__32122)));
} else
{if("\uFDD0'else")
{return inode__32120;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__32126 = this;
var inode__32127 = this;
var bit__32128 = (1 << ((hash >>> shift) & 0x01f));
var idx__32129 = cljs.core.bitmap_indexed_node_index(this__32126.bitmap,bit__32128);
if(((this__32126.bitmap & bit__32128) === 0))
{var n__32130 = cljs.core.bit_count(this__32126.bitmap);
if((n__32130 >= 16))
{var nodes__32131 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__32132 = ((hash >>> shift) & 0x01f);
(nodes__32131[jdx__32132] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__32133 = 0;
var j__32134 = 0;
while(true){
if((i__32133 < 32))
{if((((this__32126.bitmap >>> i__32133) & 1) === 0))
{{
var G__32149 = (i__32133 + 1);
var G__32150 = j__32134;
i__32133 = G__32149;
j__32134 = G__32150;
continue;
}
} else
{(nodes__32131[i__32133] = ((!(((this__32126.arr[j__32134]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.cljs$lang$arity$1((this__32126.arr[j__32134])),(this__32126.arr[j__32134]),(this__32126.arr[(j__32134 + 1)]),added_leaf_QMARK_):(this__32126.arr[(j__32134 + 1)])));
{
var G__32151 = (i__32133 + 1);
var G__32152 = (j__32134 + 2);
i__32133 = G__32151;
j__32134 = G__32152;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__32130 + 1),nodes__32131));
} else
{var new_arr__32135 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__32130 + 1)));
cljs.core.array_copy(this__32126.arr,0,new_arr__32135,0,(2 * idx__32129));
(new_arr__32135[(2 * idx__32129)] = key);
(new_arr__32135[((2 * idx__32129) + 1)] = val);
cljs.core.array_copy(this__32126.arr,(2 * idx__32129),new_arr__32135,(2 * (idx__32129 + 1)),(2 * (n__32130 - idx__32129)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__32126.bitmap | bit__32128),new_arr__32135));
}
} else
{var key_or_nil__32136 = (this__32126.arr[(2 * idx__32129)]);
var val_or_node__32137 = (this__32126.arr[((2 * idx__32129) + 1)]);
if((key_or_nil__32136 == null))
{var n__32138 = val_or_node__32137.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__32138 === val_or_node__32137))
{return inode__32127;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__32126.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__32126.arr,((2 * idx__32129) + 1),n__32138)));
}
} else
{if(cljs.core.key_test(key,key_or_nil__32136))
{if((val === val_or_node__32137))
{return inode__32127;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__32126.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__32126.arr,((2 * idx__32129) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__32126.bitmap,cljs.core.clone_and_set.cljs$lang$arity$5(this__32126.arr,(2 * idx__32129),null,((2 * idx__32129) + 1),cljs.core.create_node.cljs$lang$arity$6((shift + 5),key_or_nil__32136,val_or_node__32137,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__32139 = this;
var inode__32140 = this;
var bit__32141 = (1 << ((hash >>> shift) & 0x01f));
if(((this__32139.bitmap & bit__32141) === 0))
{return not_found;
} else
{var idx__32142 = cljs.core.bitmap_indexed_node_index(this__32139.bitmap,bit__32141);
var key_or_nil__32143 = (this__32139.arr[(2 * idx__32142)]);
var val_or_node__32144 = (this__32139.arr[((2 * idx__32142) + 1)]);
if((key_or_nil__32143 == null))
{return val_or_node__32144.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__32143))
{return val_or_node__32144;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.cljs$lang$arity$1(0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__32160 = array_node.arr;
var len__32161 = (2 * (array_node.cnt - 1));
var new_arr__32162 = cljs.core.make_array.cljs$lang$arity$1(len__32161);
var i__32163 = 0;
var j__32164 = 1;
var bitmap__32165 = 0;
while(true){
if((i__32163 < len__32161))
{if((function (){var and__3937__auto____32166 = !((i__32163 === idx));
if(and__3937__auto____32166)
{return !(((arr__32160[i__32163]) == null));
} else
{return and__3937__auto____32166;
}
})())
{(new_arr__32162[j__32164] = (arr__32160[i__32163]));
{
var G__32167 = (i__32163 + 1);
var G__32168 = (j__32164 + 2);
var G__32169 = (bitmap__32165 | (1 << i__32163));
i__32163 = G__32167;
j__32164 = G__32168;
bitmap__32165 = G__32169;
continue;
}
} else
{{
var G__32170 = (i__32163 + 1);
var G__32171 = j__32164;
var G__32172 = bitmap__32165;
i__32163 = G__32170;
j__32164 = G__32171;
bitmap__32165 = G__32172;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__32165,new_arr__32162));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__32173 = this;
var inode__32174 = this;
var idx__32175 = ((hash >>> shift) & 0x01f);
var node__32176 = (this__32173.arr[idx__32175]);
if((node__32176 == null))
{var editable__32177 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__32174,edit,idx__32175,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__32177.cnt = (editable__32177.cnt + 1);
return editable__32177;
} else
{var n__32178 = node__32176.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__32178 === node__32176))
{return inode__32174;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__32174,edit,idx__32175,n__32178);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__32179 = this;
var inode__32180 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$1(this__32179.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__32181 = this;
var inode__32182 = this;
var idx__32183 = ((hash >>> shift) & 0x01f);
var node__32184 = (this__32181.arr[idx__32183]);
if((node__32184 == null))
{return inode__32182;
} else
{var n__32185 = node__32184.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__32185 === node__32184))
{return inode__32182;
} else
{if((n__32185 == null))
{if((this__32181.cnt <= 8))
{return cljs.core.pack_array_node(inode__32182,edit,idx__32183);
} else
{var editable__32186 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__32182,edit,idx__32183,n__32185);
editable__32186.cnt = (editable__32186.cnt - 1);
return editable__32186;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__32182,edit,idx__32183,n__32185);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__32187 = this;
var inode__32188 = this;
if((e === this__32187.edit))
{return inode__32188;
} else
{return (new cljs.core.ArrayNode(e,this__32187.cnt,this__32187.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__32189 = this;
var inode__32190 = this;
var len__32191 = this__32189.arr.length;
var i__32192 = 0;
var init__32193 = init;
while(true){
if((i__32192 < len__32191))
{var node__32194 = (this__32189.arr[i__32192]);
if(!((node__32194 == null)))
{var init__32195 = node__32194.kv_reduce(f,init__32193);
if(cljs.core.reduced_QMARK_(init__32195))
{return cljs.core.deref(init__32195);
} else
{{
var G__32214 = (i__32192 + 1);
var G__32215 = init__32195;
i__32192 = G__32214;
init__32193 = G__32215;
continue;
}
}
} else
{return null;
}
} else
{return init__32193;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__32196 = this;
var inode__32197 = this;
var idx__32198 = ((hash >>> shift) & 0x01f);
var node__32199 = (this__32196.arr[idx__32198]);
if(!((node__32199 == null)))
{return node__32199.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__32200 = this;
var inode__32201 = this;
var idx__32202 = ((hash >>> shift) & 0x01f);
var node__32203 = (this__32200.arr[idx__32202]);
if(!((node__32203 == null)))
{var n__32204 = node__32203.inode_without((shift + 5),hash,key);
if((n__32204 === node__32203))
{return inode__32201;
} else
{if((n__32204 == null))
{if((this__32200.cnt <= 8))
{return cljs.core.pack_array_node(inode__32201,null,idx__32202);
} else
{return (new cljs.core.ArrayNode(null,(this__32200.cnt - 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__32200.arr,idx__32202,n__32204)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__32200.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__32200.arr,idx__32202,n__32204)));
} else
{return null;
}
}
}
} else
{return inode__32201;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__32205 = this;
var inode__32206 = this;
var idx__32207 = ((hash >>> shift) & 0x01f);
var node__32208 = (this__32205.arr[idx__32207]);
if((node__32208 == null))
{return (new cljs.core.ArrayNode(null,(this__32205.cnt + 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__32205.arr,idx__32207,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__32209 = node__32208.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__32209 === node__32208))
{return inode__32206;
} else
{return (new cljs.core.ArrayNode(null,this__32205.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__32205.arr,idx__32207,n__32209)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__32210 = this;
var inode__32211 = this;
var idx__32212 = ((hash >>> shift) & 0x01f);
var node__32213 = (this__32210.arr[idx__32212]);
if(!((node__32213 == null)))
{return node__32213.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__32218 = (2 * cnt);
var i__32219 = 0;
while(true){
if((i__32219 < lim__32218))
{if(cljs.core.key_test(key,(arr[i__32219])))
{return i__32219;
} else
{{
var G__32220 = (i__32219 + 2);
i__32219 = G__32220;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__32221 = this;
var inode__32222 = this;
if((hash === this__32221.collision_hash))
{var idx__32223 = cljs.core.hash_collision_node_find_index(this__32221.arr,this__32221.cnt,key);
if((idx__32223 === -1))
{if((this__32221.arr.length > (2 * this__32221.cnt)))
{var editable__32224 = cljs.core.edit_and_set.cljs$lang$arity$6(inode__32222,edit,(2 * this__32221.cnt),key,((2 * this__32221.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__32224.cnt = (editable__32224.cnt + 1);
return editable__32224;
} else
{var len__32225 = this__32221.arr.length;
var new_arr__32226 = cljs.core.make_array.cljs$lang$arity$1((len__32225 + 2));
cljs.core.array_copy(this__32221.arr,0,new_arr__32226,0,len__32225);
(new_arr__32226[len__32225] = key);
(new_arr__32226[(len__32225 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__32222.ensure_editable_array(edit,(this__32221.cnt + 1),new_arr__32226);
}
} else
{if(((this__32221.arr[(idx__32223 + 1)]) === val))
{return inode__32222;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__32222,edit,(idx__32223 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__32221.collision_hash >>> shift) & 0x01f)),[null,inode__32222,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__32227 = this;
var inode__32228 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__32227.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__32229 = this;
var inode__32230 = this;
var idx__32231 = cljs.core.hash_collision_node_find_index(this__32229.arr,this__32229.cnt,key);
if((idx__32231 === -1))
{return inode__32230;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__32229.cnt === 1))
{return null;
} else
{var editable__32232 = inode__32230.ensure_editable(edit);
var earr__32233 = editable__32232.arr;
(earr__32233[idx__32231] = (earr__32233[((2 * this__32229.cnt) - 2)]));
(earr__32233[(idx__32231 + 1)] = (earr__32233[((2 * this__32229.cnt) - 1)]));
(earr__32233[((2 * this__32229.cnt) - 1)] = null);
(earr__32233[((2 * this__32229.cnt) - 2)] = null);
editable__32232.cnt = (editable__32232.cnt - 1);
return editable__32232;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__32234 = this;
var inode__32235 = this;
if((e === this__32234.edit))
{return inode__32235;
} else
{var new_arr__32236 = cljs.core.make_array.cljs$lang$arity$1((2 * (this__32234.cnt + 1)));
cljs.core.array_copy(this__32234.arr,0,new_arr__32236,0,(2 * this__32234.cnt));
return (new cljs.core.HashCollisionNode(e,this__32234.collision_hash,this__32234.cnt,new_arr__32236));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__32237 = this;
var inode__32238 = this;
return cljs.core.inode_kv_reduce(this__32237.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__32239 = this;
var inode__32240 = this;
var idx__32241 = cljs.core.hash_collision_node_find_index(this__32239.arr,this__32239.cnt,key);
if((idx__32241 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__32239.arr[idx__32241])))
{return cljs.core.PersistentVector.fromArray([(this__32239.arr[idx__32241]),(this__32239.arr[(idx__32241 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__32242 = this;
var inode__32243 = this;
var idx__32244 = cljs.core.hash_collision_node_find_index(this__32242.arr,this__32242.cnt,key);
if((idx__32244 === -1))
{return inode__32243;
} else
{if((this__32242.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__32242.collision_hash,(this__32242.cnt - 1),cljs.core.remove_pair(this__32242.arr,cljs.core.quot(idx__32244,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__32245 = this;
var inode__32246 = this;
if((hash === this__32245.collision_hash))
{var idx__32247 = cljs.core.hash_collision_node_find_index(this__32245.arr,this__32245.cnt,key);
if((idx__32247 === -1))
{var len__32248 = this__32245.arr.length;
var new_arr__32249 = cljs.core.make_array.cljs$lang$arity$1((len__32248 + 2));
cljs.core.array_copy(this__32245.arr,0,new_arr__32249,0,len__32248);
(new_arr__32249[len__32248] = key);
(new_arr__32249[(len__32248 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__32245.collision_hash,(this__32245.cnt + 1),new_arr__32249));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((this__32245.arr[idx__32247]),val))
{return inode__32246;
} else
{return (new cljs.core.HashCollisionNode(null,this__32245.collision_hash,this__32245.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__32245.arr,(idx__32247 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__32245.collision_hash >>> shift) & 0x01f)),[null,inode__32246])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__32250 = this;
var inode__32251 = this;
var idx__32252 = cljs.core.hash_collision_node_find_index(this__32250.arr,this__32250.cnt,key);
if((idx__32252 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__32250.arr[idx__32252])))
{return (this__32250.arr[(idx__32252 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__32253 = this;
var inode__32254 = this;
if((e === this__32253.edit))
{this__32253.arr = array;
this__32253.cnt = count;
return inode__32254;
} else
{return (new cljs.core.HashCollisionNode(this__32253.edit,this__32253.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__32259 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__32259 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__32259,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___32260 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__32259,key1,val1,added_leaf_QMARK___32260).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___32260);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__32261 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__32261 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__32261,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___32262 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__32261,key1,val1,added_leaf_QMARK___32262).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___32262);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32263 = this;
var h__2225__auto____32264 = this__32263.__hash;
if(!((h__2225__auto____32264 == null)))
{return h__2225__auto____32264;
} else
{var h__2225__auto____32265 = cljs.core.hash_coll(coll);
this__32263.__hash = h__2225__auto____32265;
return h__2225__auto____32265;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__32266 = this;
return cljs.core.cons(o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__32267 = this;
var this__32268 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32268], 0));
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__32269 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__32270 = this;
if((this__32270.s == null))
{return cljs.core.PersistentVector.fromArray([(this__32270.nodes[this__32270.i]),(this__32270.nodes[(this__32270.i + 1)])], true);
} else
{return cljs.core.first(this__32270.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__32271 = this;
if((this__32271.s == null))
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__32271.nodes,(this__32271.i + 2),null);
} else
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__32271.nodes,this__32271.i,cljs.core.next(this__32271.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32272 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__32273 = this;
return (new cljs.core.NodeSeq(meta,this__32273.nodes,this__32273.i,this__32273.s,this__32273.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__32274 = this;
return this__32274.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__32275 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__32275.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$lang$arity$3(nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__32282 = nodes.length;
var j__32283 = i;
while(true){
if((j__32283 < len__32282))
{if(!(((nodes[j__32283]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__32283,null,null));
} else
{var temp__4086__auto____32284 = (nodes[(j__32283 + 1)]);
if(cljs.core.truth_(temp__4086__auto____32284))
{var node__32285 = temp__4086__auto____32284;
var temp__4086__auto____32286 = node__32285.inode_seq();
if(cljs.core.truth_(temp__4086__auto____32286))
{var node_seq__32287 = temp__4086__auto____32286;
return (new cljs.core.NodeSeq(null,nodes,(j__32283 + 2),node_seq__32287,null));
} else
{{
var G__32288 = (j__32283 + 2);
j__32283 = G__32288;
continue;
}
}
} else
{{
var G__32289 = (j__32283 + 2);
j__32283 = G__32289;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32290 = this;
var h__2225__auto____32291 = this__32290.__hash;
if(!((h__2225__auto____32291 == null)))
{return h__2225__auto____32291;
} else
{var h__2225__auto____32292 = cljs.core.hash_coll(coll);
this__32290.__hash = h__2225__auto____32292;
return h__2225__auto____32292;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__32293 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__32294 = this;
var this__32295 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32295], 0));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__32296 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__32297 = this;
return cljs.core.first(this__32297.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__32298 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$4(null,this__32298.nodes,this__32298.i,cljs.core.next(this__32298.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32299 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__32300 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__32300.nodes,this__32300.i,this__32300.s,this__32300.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__32301 = this;
return this__32301.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__32302 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__32302.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$lang$arity$4(null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__32309 = nodes.length;
var j__32310 = i;
while(true){
if((j__32310 < len__32309))
{var temp__4086__auto____32311 = (nodes[j__32310]);
if(cljs.core.truth_(temp__4086__auto____32311))
{var nj__32312 = temp__4086__auto____32311;
var temp__4086__auto____32313 = nj__32312.inode_seq();
if(cljs.core.truth_(temp__4086__auto____32313))
{var ns__32314 = temp__4086__auto____32313;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__32310 + 1),ns__32314,null));
} else
{{
var G__32315 = (j__32310 + 1);
j__32310 = G__32315;
continue;
}
}
} else
{{
var G__32316 = (j__32310 + 1);
j__32310 = G__32316;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__32319 = this;
return (new cljs.core.TransientHashMap({},this__32319.root,this__32319.cnt,this__32319.has_nil_QMARK_,this__32319.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32320 = this;
var h__2225__auto____32321 = this__32320.__hash;
if(!((h__2225__auto____32321 == null)))
{return h__2225__auto____32321;
} else
{var h__2225__auto____32322 = cljs.core.hash_imap(coll);
this__32320.__hash = h__2225__auto____32322;
return h__2225__auto____32322;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__32323 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__32324 = this;
if((k == null))
{if(this__32324.has_nil_QMARK_)
{return this__32324.nil_val;
} else
{return not_found;
}
} else
{if((this__32324.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__32324.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__32325 = this;
if((k == null))
{if((function (){var and__3937__auto____32326 = this__32325.has_nil_QMARK_;
if(and__3937__auto____32326)
{return (v === this__32325.nil_val);
} else
{return and__3937__auto____32326;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__32325.meta,((this__32325.has_nil_QMARK_)?this__32325.cnt:(this__32325.cnt + 1)),this__32325.root,true,v,null));
}
} else
{var added_leaf_QMARK___32327 = (new cljs.core.Box(false));
var new_root__32328 = (((this__32325.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__32325.root).inode_assoc(0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___32327);
if((new_root__32328 === this__32325.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__32325.meta,((added_leaf_QMARK___32327.val)?(this__32325.cnt + 1):this__32325.cnt),new_root__32328,this__32325.has_nil_QMARK_,this__32325.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__32329 = this;
if((k == null))
{return this__32329.has_nil_QMARK_;
} else
{if((this__32329.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__32329.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__32352 = null;
var G__32352__2 = (function (this_sym32330,k){
var this__32332 = this;
var this_sym32330__32333 = this;
var coll__32334 = this_sym32330__32333;
return coll__32334.cljs$core$ILookup$_lookup$arity$2(coll__32334,k);
});
var G__32352__3 = (function (this_sym32331,k,not_found){
var this__32332 = this;
var this_sym32331__32335 = this;
var coll__32336 = this_sym32331__32335;
return coll__32336.cljs$core$ILookup$_lookup$arity$3(coll__32336,k,not_found);
});
G__32352 = function(this_sym32331,k,not_found){
switch(arguments.length){
case 2:
return G__32352__2.call(this,this_sym32331,k);
case 3:
return G__32352__3.call(this,this_sym32331,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32352;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym32317,args32318){
var this__32337 = this;
return this_sym32317.call.apply(this_sym32317,[this_sym32317].concat(args32318.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__32338 = this;
var init__32339 = ((this__32338.has_nil_QMARK_)?(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,null,this__32338.nil_val) : f.call(null,init,null,this__32338.nil_val)):init);
if(cljs.core.reduced_QMARK_(init__32339))
{return cljs.core.deref(init__32339);
} else
{if(!((this__32338.root == null)))
{return this__32338.root.kv_reduce(f,init__32339);
} else
{if("\uFDD0'else")
{return init__32339;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__32340 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__32341 = this;
var this__32342 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32342], 0));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__32343 = this;
if((this__32343.cnt > 0))
{var s__32344 = ((!((this__32343.root == null)))?this__32343.root.inode_seq():null);
if(this__32343.has_nil_QMARK_)
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([null,this__32343.nil_val], true),s__32344);
} else
{return s__32344;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__32345 = this;
return this__32345.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32346 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__32347 = this;
return (new cljs.core.PersistentHashMap(meta,this__32347.cnt,this__32347.root,this__32347.has_nil_QMARK_,this__32347.nil_val,this__32347.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__32348 = this;
return this__32348.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__32349 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,this__32349.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__32350 = this;
if((k == null))
{if(this__32350.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__32350.meta,(this__32350.cnt - 1),this__32350.root,false,null,null));
} else
{return coll;
}
} else
{if((this__32350.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__32351 = this__32350.root.inode_without(0,cljs.core.hash.cljs$lang$arity$1(k),k);
if((new_root__32351 === this__32350.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__32350.meta,(this__32350.cnt - 1),new_root__32351,this__32350.has_nil_QMARK_,this__32350.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__32353 = ks.length;
var i__32354 = 0;
var out__32355 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__32354 < len__32353))
{{
var G__32356 = (i__32354 + 1);
var G__32357 = cljs.core.assoc_BANG_(out__32355,(ks[i__32354]),(vs[i__32354]));
i__32354 = G__32356;
out__32355 = G__32357;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__32355);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__32358 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__32359 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__32360 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__32361 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__32362 = this;
if((k == null))
{if(this__32362.has_nil_QMARK_)
{return this__32362.nil_val;
} else
{return null;
}
} else
{if((this__32362.root == null))
{return null;
} else
{return this__32362.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__32363 = this;
if((k == null))
{if(this__32363.has_nil_QMARK_)
{return this__32363.nil_val;
} else
{return not_found;
}
} else
{if((this__32363.root == null))
{return not_found;
} else
{return this__32363.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__32364 = this;
if(this__32364.edit)
{return this__32364.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__32365 = this;
var tcoll__32366 = this;
if(this__32365.edit)
{if((function (){var G__32367__32368 = o;
if(G__32367__32368)
{if((function (){var or__3939__auto____32369 = (G__32367__32368.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3939__auto____32369)
{return or__3939__auto____32369;
} else
{return G__32367__32368.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__32367__32368.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__32367__32368);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__32367__32368);
}
})())
{return tcoll__32366.assoc_BANG_(cljs.core.key(o),cljs.core.val(o));
} else
{var es__32370 = cljs.core.seq(o);
var tcoll__32371 = tcoll__32366;
while(true){
var temp__4086__auto____32372 = cljs.core.first(es__32370);
if(cljs.core.truth_(temp__4086__auto____32372))
{var e__32373 = temp__4086__auto____32372;
{
var G__32384 = cljs.core.next(es__32370);
var G__32385 = tcoll__32371.assoc_BANG_(cljs.core.key(e__32373),cljs.core.val(e__32373));
es__32370 = G__32384;
tcoll__32371 = G__32385;
continue;
}
} else
{return tcoll__32371;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__32374 = this;
var tcoll__32375 = this;
if(this__32374.edit)
{if((k == null))
{if((this__32374.nil_val === v))
{} else
{this__32374.nil_val = v;
}
if(this__32374.has_nil_QMARK_)
{} else
{this__32374.count = (this__32374.count + 1);
this__32374.has_nil_QMARK_ = true;
}
return tcoll__32375;
} else
{var added_leaf_QMARK___32376 = (new cljs.core.Box(false));
var node__32377 = (((this__32374.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__32374.root).inode_assoc_BANG_(this__32374.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___32376);
if((node__32377 === this__32374.root))
{} else
{this__32374.root = node__32377;
}
if(added_leaf_QMARK___32376.val)
{this__32374.count = (this__32374.count + 1);
} else
{}
return tcoll__32375;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__32378 = this;
var tcoll__32379 = this;
if(this__32378.edit)
{if((k == null))
{if(this__32378.has_nil_QMARK_)
{this__32378.has_nil_QMARK_ = false;
this__32378.nil_val = null;
this__32378.count = (this__32378.count - 1);
return tcoll__32379;
} else
{return tcoll__32379;
}
} else
{if((this__32378.root == null))
{return tcoll__32379;
} else
{var removed_leaf_QMARK___32380 = (new cljs.core.Box(false));
var node__32381 = this__32378.root.inode_without_BANG_(this__32378.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,removed_leaf_QMARK___32380);
if((node__32381 === this__32378.root))
{} else
{this__32378.root = node__32381;
}
if(cljs.core.truth_((removed_leaf_QMARK___32380[0])))
{this__32378.count = (this__32378.count - 1);
} else
{}
return tcoll__32379;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__32382 = this;
var tcoll__32383 = this;
if(this__32382.edit)
{this__32382.edit = null;
return (new cljs.core.PersistentHashMap(null,this__32382.count,this__32382.root,this__32382.has_nil_QMARK_,this__32382.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__32388 = node;
var stack__32389 = stack;
while(true){
if(!((t__32388 == null)))
{{
var G__32390 = ((ascending_QMARK_)?t__32388.left:t__32388.right);
var G__32391 = cljs.core.conj.cljs$lang$arity$2(stack__32389,t__32388);
t__32388 = G__32390;
stack__32389 = G__32391;
continue;
}
} else
{return stack__32389;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32392 = this;
var h__2225__auto____32393 = this__32392.__hash;
if(!((h__2225__auto____32393 == null)))
{return h__2225__auto____32393;
} else
{var h__2225__auto____32394 = cljs.core.hash_coll(coll);
this__32392.__hash = h__2225__auto____32394;
return h__2225__auto____32394;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__32395 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__32396 = this;
var this__32397 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32397], 0));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__32398 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__32399 = this;
if((this__32399.cnt < 0))
{return (cljs.core.count(cljs.core.next(coll)) + 1);
} else
{return this__32399.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__32400 = this;
return cljs.core.peek(this__32400.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__32401 = this;
var t__32402 = cljs.core.first(this__32401.stack);
var next_stack__32403 = cljs.core.tree_map_seq_push(((this__32401.ascending_QMARK_)?t__32402.right:t__32402.left),cljs.core.next(this__32401.stack),this__32401.ascending_QMARK_);
if(!((next_stack__32403 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__32403,this__32401.ascending_QMARK_,(this__32401.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32404 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__32405 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__32405.stack,this__32405.ascending_QMARK_,this__32405.cnt,this__32405.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__32406 = this;
return this__32406.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,right))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if((function (){var and__3937__auto____32408 = cljs.core.instance_QMARK_(cljs.core.RedNode,right);
if(and__3937__auto____32408)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,right.left);
} else
{return and__3937__auto____32408;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,left))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if((function (){var and__3937__auto____32410 = cljs.core.instance_QMARK_(cljs.core.RedNode,left);
if(and__3937__auto____32410)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,left.right);
} else
{return and__3937__auto____32410;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__32414 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,node.key,node.val) : f.call(null,init,node.key,node.val));
if(cljs.core.reduced_QMARK_(init__32414))
{return cljs.core.deref(init__32414);
} else
{var init__32415 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init__32414):init__32414);
if(cljs.core.reduced_QMARK_(init__32415))
{return cljs.core.deref(init__32415);
} else
{var init__32416 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__32415):init__32415);
if(cljs.core.reduced_QMARK_(init__32416))
{return cljs.core.deref(init__32416);
} else
{return init__32416;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32419 = this;
var h__2225__auto____32420 = this__32419.__hash;
if(!((h__2225__auto____32420 == null)))
{return h__2225__auto____32420;
} else
{var h__2225__auto____32421 = cljs.core.hash_coll(coll);
this__32419.__hash = h__2225__auto____32421;
return h__2225__auto____32421;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__32422 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__32423 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__32424 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__32424.key,this__32424.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__32472 = null;
var G__32472__2 = (function (this_sym32425,k){
var this__32427 = this;
var this_sym32425__32428 = this;
var node__32429 = this_sym32425__32428;
return node__32429.cljs$core$ILookup$_lookup$arity$2(node__32429,k);
});
var G__32472__3 = (function (this_sym32426,k,not_found){
var this__32427 = this;
var this_sym32426__32430 = this;
var node__32431 = this_sym32426__32430;
return node__32431.cljs$core$ILookup$_lookup$arity$3(node__32431,k,not_found);
});
G__32472 = function(this_sym32426,k,not_found){
switch(arguments.length){
case 2:
return G__32472__2.call(this,this_sym32426,k);
case 3:
return G__32472__3.call(this,this_sym32426,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32472;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym32417,args32418){
var this__32432 = this;
return this_sym32417.call.apply(this_sym32417,[this_sym32417].concat(args32418.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__32433 = this;
return cljs.core.PersistentVector.fromArray([this__32433.key,this__32433.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__32434 = this;
return this__32434.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__32435 = this;
return this__32435.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__32436 = this;
var node__32437 = this;
return ins.balance_right(node__32437);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__32438 = this;
var node__32439 = this;
return (new cljs.core.RedNode(this__32438.key,this__32438.val,this__32438.left,this__32438.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__32440 = this;
var node__32441 = this;
return cljs.core.balance_right_del(this__32440.key,this__32440.val,this__32440.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__32442 = this;
var node__32443 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__32444 = this;
var node__32445 = this;
return cljs.core.tree_map_kv_reduce(node__32445,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__32446 = this;
var node__32447 = this;
return cljs.core.balance_left_del(this__32446.key,this__32446.val,del,this__32446.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__32448 = this;
var node__32449 = this;
return ins.balance_left(node__32449);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__32450 = this;
var node__32451 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__32451,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__32473 = null;
var G__32473__0 = (function (){
var this__32452 = this;
var this__32454 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32454], 0));
});
G__32473 = function(){
switch(arguments.length){
case 0:
return G__32473__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32473;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__32455 = this;
var node__32456 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__32456,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__32457 = this;
var node__32458 = this;
return node__32458;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__32459 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__32460 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__32461 = this;
return cljs.core.list.cljs$lang$arity$2(this__32461.key,this__32461.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__32462 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__32463 = this;
return this__32463.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__32464 = this;
return cljs.core.PersistentVector.fromArray([this__32464.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__32465 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__32465.key,this__32465.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32466 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__32467 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__32467.key,this__32467.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__32468 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__32469 = this;
if((n === 0))
{return this__32469.key;
} else
{if((n === 1))
{return this__32469.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__32470 = this;
if((n === 0))
{return this__32470.key;
} else
{if((n === 1))
{return this__32470.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__32471 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32476 = this;
var h__2225__auto____32477 = this__32476.__hash;
if(!((h__2225__auto____32477 == null)))
{return h__2225__auto____32477;
} else
{var h__2225__auto____32478 = cljs.core.hash_coll(coll);
this__32476.__hash = h__2225__auto____32478;
return h__2225__auto____32478;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__32479 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__32480 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__32481 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__32481.key,this__32481.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__32529 = null;
var G__32529__2 = (function (this_sym32482,k){
var this__32484 = this;
var this_sym32482__32485 = this;
var node__32486 = this_sym32482__32485;
return node__32486.cljs$core$ILookup$_lookup$arity$2(node__32486,k);
});
var G__32529__3 = (function (this_sym32483,k,not_found){
var this__32484 = this;
var this_sym32483__32487 = this;
var node__32488 = this_sym32483__32487;
return node__32488.cljs$core$ILookup$_lookup$arity$3(node__32488,k,not_found);
});
G__32529 = function(this_sym32483,k,not_found){
switch(arguments.length){
case 2:
return G__32529__2.call(this,this_sym32483,k);
case 3:
return G__32529__3.call(this,this_sym32483,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32529;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym32474,args32475){
var this__32489 = this;
return this_sym32474.call.apply(this_sym32474,[this_sym32474].concat(args32475.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__32490 = this;
return cljs.core.PersistentVector.fromArray([this__32490.key,this__32490.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__32491 = this;
return this__32491.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__32492 = this;
return this__32492.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__32493 = this;
var node__32494 = this;
return (new cljs.core.RedNode(this__32493.key,this__32493.val,this__32493.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__32495 = this;
var node__32496 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__32497 = this;
var node__32498 = this;
return (new cljs.core.RedNode(this__32497.key,this__32497.val,this__32497.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__32499 = this;
var node__32500 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__32501 = this;
var node__32502 = this;
return cljs.core.tree_map_kv_reduce(node__32502,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__32503 = this;
var node__32504 = this;
return (new cljs.core.RedNode(this__32503.key,this__32503.val,del,this__32503.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__32505 = this;
var node__32506 = this;
return (new cljs.core.RedNode(this__32505.key,this__32505.val,ins,this__32505.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__32507 = this;
var node__32508 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__32507.left))
{return (new cljs.core.RedNode(this__32507.key,this__32507.val,this__32507.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__32507.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__32507.right))
{return (new cljs.core.RedNode(this__32507.right.key,this__32507.right.val,(new cljs.core.BlackNode(this__32507.key,this__32507.val,this__32507.left,this__32507.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__32507.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__32508,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__32530 = null;
var G__32530__0 = (function (){
var this__32509 = this;
var this__32511 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32511], 0));
});
G__32530 = function(){
switch(arguments.length){
case 0:
return G__32530__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32530;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__32512 = this;
var node__32513 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__32512.right))
{return (new cljs.core.RedNode(this__32512.key,this__32512.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__32512.left,null)),this__32512.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__32512.left))
{return (new cljs.core.RedNode(this__32512.left.key,this__32512.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__32512.left.left,null)),(new cljs.core.BlackNode(this__32512.key,this__32512.val,this__32512.left.right,this__32512.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__32513,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__32514 = this;
var node__32515 = this;
return (new cljs.core.BlackNode(this__32514.key,this__32514.val,this__32514.left,this__32514.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__32516 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__32517 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__32518 = this;
return cljs.core.list.cljs$lang$arity$2(this__32518.key,this__32518.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__32519 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__32520 = this;
return this__32520.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__32521 = this;
return cljs.core.PersistentVector.fromArray([this__32521.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__32522 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__32522.key,this__32522.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32523 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__32524 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__32524.key,this__32524.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__32525 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__32526 = this;
if((n === 0))
{return this__32526.key;
} else
{if((n === 1))
{return this__32526.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__32527 = this;
if((n === 0))
{return this__32527.key;
} else
{if((n === 1))
{return this__32527.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__32528 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__32534 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__32534 === 0))
{(found[0] = tree);
return null;
} else
{if((c__32534 < 0))
{var ins__32535 = tree_map_add(comp,tree.left,k,v,found);
if(!((ins__32535 == null)))
{return tree.add_left(ins__32535);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__32536 = tree_map_add(comp,tree.right,k,v,found);
if(!((ins__32536 == null)))
{return tree.add_right(ins__32536);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{var app__32539 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__32539))
{return (new cljs.core.RedNode(app__32539.key,app__32539.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__32539.left,null)),(new cljs.core.RedNode(right.key,right.val,app__32539.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__32539,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__32540 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__32540))
{return (new cljs.core.RedNode(app__32540.key,app__32540.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__32540.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__32540.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__32540,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__32546 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__32546 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c__32546 < 0))
{var del__32547 = tree_map_remove(comp,tree.left,k,found);
if((function (){var or__3939__auto____32548 = !((del__32547 == null));
if(or__3939__auto____32548)
{return or__3939__auto____32548;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del(tree.key,tree.val,del__32547,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__32547,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__32549 = tree_map_remove(comp,tree.right,k,found);
if((function (){var or__3939__auto____32550 = !((del__32549 == null));
if(or__3939__auto____32550)
{return or__3939__auto____32550;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del__32549);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__32549,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__32553 = tree.key;
var c__32554 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tk__32553) : comp.call(null,k,tk__32553));
if((c__32554 === 0))
{return tree.replace(tk__32553,v,tree.left,tree.right);
} else
{if((c__32554 < 0))
{return tree.replace(tk__32553,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__32553,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32557 = this;
var h__2225__auto____32558 = this__32557.__hash;
if(!((h__2225__auto____32558 == null)))
{return h__2225__auto____32558;
} else
{var h__2225__auto____32559 = cljs.core.hash_imap(coll);
this__32557.__hash = h__2225__auto____32559;
return h__2225__auto____32559;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__32560 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__32561 = this;
var n__32562 = coll.entry_at(k);
if(!((n__32562 == null)))
{return n__32562.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__32563 = this;
var found__32564 = [null];
var t__32565 = cljs.core.tree_map_add(this__32563.comp,this__32563.tree,k,v,found__32564);
if((t__32565 == null))
{var found_node__32566 = cljs.core.nth.cljs$lang$arity$2(found__32564,0);
if(cljs.core._EQ_.cljs$lang$arity$2(v,found_node__32566.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__32563.comp,cljs.core.tree_map_replace(this__32563.comp,this__32563.tree,k,v),this__32563.cnt,this__32563.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__32563.comp,t__32565.blacken(),(this__32563.cnt + 1),this__32563.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__32567 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__32601 = null;
var G__32601__2 = (function (this_sym32568,k){
var this__32570 = this;
var this_sym32568__32571 = this;
var coll__32572 = this_sym32568__32571;
return coll__32572.cljs$core$ILookup$_lookup$arity$2(coll__32572,k);
});
var G__32601__3 = (function (this_sym32569,k,not_found){
var this__32570 = this;
var this_sym32569__32573 = this;
var coll__32574 = this_sym32569__32573;
return coll__32574.cljs$core$ILookup$_lookup$arity$3(coll__32574,k,not_found);
});
G__32601 = function(this_sym32569,k,not_found){
switch(arguments.length){
case 2:
return G__32601__2.call(this,this_sym32569,k);
case 3:
return G__32601__3.call(this,this_sym32569,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32601;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym32555,args32556){
var this__32575 = this;
return this_sym32555.call.apply(this_sym32555,[this_sym32555].concat(args32556.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__32576 = this;
if(!((this__32576.tree == null)))
{return cljs.core.tree_map_kv_reduce(this__32576.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__32577 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__32578 = this;
if((this__32578.cnt > 0))
{return cljs.core.create_tree_map_seq(this__32578.tree,false,this__32578.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__32579 = this;
var this__32580 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32580], 0));
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__32581 = this;
var coll__32582 = this;
var t__32583 = this__32581.tree;
while(true){
if(!((t__32583 == null)))
{var c__32584 = (this__32581.comp.cljs$lang$arity$2 ? this__32581.comp.cljs$lang$arity$2(k,t__32583.key) : this__32581.comp.call(null,k,t__32583.key));
if((c__32584 === 0))
{return t__32583;
} else
{if((c__32584 < 0))
{{
var G__32602 = t__32583.left;
t__32583 = G__32602;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__32603 = t__32583.right;
t__32583 = G__32603;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__32585 = this;
if((this__32585.cnt > 0))
{return cljs.core.create_tree_map_seq(this__32585.tree,ascending_QMARK_,this__32585.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__32586 = this;
if((this__32586.cnt > 0))
{var stack__32587 = null;
var t__32588 = this__32586.tree;
while(true){
if(!((t__32588 == null)))
{var c__32589 = (this__32586.comp.cljs$lang$arity$2 ? this__32586.comp.cljs$lang$arity$2(k,t__32588.key) : this__32586.comp.call(null,k,t__32588.key));
if((c__32589 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$lang$arity$2(stack__32587,t__32588),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__32589 < 0))
{{
var G__32604 = cljs.core.conj.cljs$lang$arity$2(stack__32587,t__32588);
var G__32605 = t__32588.left;
stack__32587 = G__32604;
t__32588 = G__32605;
continue;
}
} else
{{
var G__32606 = stack__32587;
var G__32607 = t__32588.right;
stack__32587 = G__32606;
t__32588 = G__32607;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__32589 > 0))
{{
var G__32608 = cljs.core.conj.cljs$lang$arity$2(stack__32587,t__32588);
var G__32609 = t__32588.right;
stack__32587 = G__32608;
t__32588 = G__32609;
continue;
}
} else
{{
var G__32610 = stack__32587;
var G__32611 = t__32588.left;
stack__32587 = G__32610;
t__32588 = G__32611;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__32587 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__32587,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__32590 = this;
return cljs.core.key(entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__32591 = this;
return this__32591.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__32592 = this;
if((this__32592.cnt > 0))
{return cljs.core.create_tree_map_seq(this__32592.tree,true,this__32592.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__32593 = this;
return this__32593.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32594 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__32595 = this;
return (new cljs.core.PersistentTreeMap(this__32595.comp,this__32595.tree,this__32595.cnt,meta,this__32595.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__32596 = this;
return this__32596.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__32597 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,this__32597.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__32598 = this;
var found__32599 = [null];
var t__32600 = cljs.core.tree_map_remove(this__32598.comp,this__32598.tree,k,found__32599);
if((t__32600 == null))
{if((cljs.core.nth.cljs$lang$arity$2(found__32599,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__32598.comp,null,0,this__32598.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__32598.comp,t__32600.blacken(),(this__32598.cnt - 1),this__32598.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__32614 = cljs.core.seq(keyvals);
var out__32615 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__32614)
{{
var G__32616 = cljs.core.nnext(in__32614);
var G__32617 = cljs.core.assoc_BANG_(out__32615,cljs.core.first(in__32614),cljs.core.second(in__32614));
in__32614 = G__32616;
out__32615 = G__32617;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__32615);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__32618){
var keyvals = cljs.core.seq(arglist__32618);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),2),cljs.core.apply.cljs$lang$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__32619){
var keyvals = cljs.core.seq(arglist__32619);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__32623 = [];
var obj__32624 = {};
var kvs__32625 = cljs.core.seq(keyvals);
while(true){
if(kvs__32625)
{ks__32623.push(cljs.core.first(kvs__32625));
(obj__32624[cljs.core.first(kvs__32625)] = cljs.core.second(kvs__32625));
{
var G__32626 = cljs.core.nnext(kvs__32625);
kvs__32625 = G__32626;
continue;
}
} else
{return (cljs.core.ObjMap.fromObject.cljs$lang$arity$2 ? cljs.core.ObjMap.fromObject.cljs$lang$arity$2(ks__32623,obj__32624) : cljs.core.ObjMap.fromObject.call(null,ks__32623,obj__32624));
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__32627){
var keyvals = cljs.core.seq(arglist__32627);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__32630 = cljs.core.seq(keyvals);
var out__32631 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__32630)
{{
var G__32632 = cljs.core.nnext(in__32630);
var G__32633 = cljs.core.assoc.cljs$lang$arity$3(out__32631,cljs.core.first(in__32630),cljs.core.second(in__32630));
in__32630 = G__32632;
out__32631 = G__32633;
continue;
}
} else
{return out__32631;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__32634){
var keyvals = cljs.core.seq(arglist__32634);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__32637 = cljs.core.seq(keyvals);
var out__32638 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__32637)
{{
var G__32639 = cljs.core.nnext(in__32637);
var G__32640 = cljs.core.assoc.cljs$lang$arity$3(out__32638,cljs.core.first(in__32637),cljs.core.second(in__32637));
in__32637 = G__32639;
out__32638 = G__32640;
continue;
}
} else
{return out__32638;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__32641){
var comparator = cljs.core.first(arglist__32641);
var keyvals = cljs.core.rest(arglist__32641);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$lang$arity$2((function (p1__32642_SHARP_,p2__32643_SHARP_){
return cljs.core.conj.cljs$lang$arity$2((function (){var or__3939__auto____32645 = p1__32642_SHARP_;
if(cljs.core.truth_(or__3939__auto____32645))
{return or__3939__auto____32645;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__32643_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__32646){
var maps = cljs.core.seq(arglist__32646);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry__32654 = (function (m,e){
var k__32652 = cljs.core.first(e);
var v__32653 = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k__32652))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__32652,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(m,k__32652,null),v__32653) : f.call(null,cljs.core._lookup.cljs$lang$arity$3(m,k__32652,null),v__32653)));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__32652,v__32653);
}
});
var merge2__32656 = (function (m1,m2){
return cljs.core.reduce.cljs$lang$arity$3(merge_entry__32654,(function (){var or__3939__auto____32655 = m1;
if(cljs.core.truth_(or__3939__auto____32655))
{return or__3939__auto____32655;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$lang$arity$2(merge2__32656,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__32657){
var f = cljs.core.first(arglist__32657);
var maps = cljs.core.rest(arglist__32657);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__32662 = cljs.core.ObjMap.EMPTY;
var keys__32663 = cljs.core.seq(keyseq);
while(true){
if(keys__32663)
{var key__32664 = cljs.core.first(keys__32663);
var entry__32665 = cljs.core._lookup.cljs$lang$arity$3(map,key__32664,"\uFDD0'cljs.core/not-found");
{
var G__32666 = ((cljs.core.not_EQ_.cljs$lang$arity$2(entry__32665,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.cljs$lang$arity$3(ret__32662,key__32664,entry__32665):ret__32662);
var G__32667 = cljs.core.next(keys__32663);
ret__32662 = G__32666;
keys__32663 = G__32667;
continue;
}
} else
{return ret__32662;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__32671 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$(this__32671.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32672 = this;
var h__2225__auto____32673 = this__32672.__hash;
if(!((h__2225__auto____32673 == null)))
{return h__2225__auto____32673;
} else
{var h__2225__auto____32674 = cljs.core.hash_iset(coll);
this__32672.__hash = h__2225__auto____32674;
return h__2225__auto____32674;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__32675 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__32676 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__32676.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__32697 = null;
var G__32697__2 = (function (this_sym32677,k){
var this__32679 = this;
var this_sym32677__32680 = this;
var coll__32681 = this_sym32677__32680;
return coll__32681.cljs$core$ILookup$_lookup$arity$2(coll__32681,k);
});
var G__32697__3 = (function (this_sym32678,k,not_found){
var this__32679 = this;
var this_sym32678__32682 = this;
var coll__32683 = this_sym32678__32682;
return coll__32683.cljs$core$ILookup$_lookup$arity$3(coll__32683,k,not_found);
});
G__32697 = function(this_sym32678,k,not_found){
switch(arguments.length){
case 2:
return G__32697__2.call(this,this_sym32678,k);
case 3:
return G__32697__3.call(this,this_sym32678,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32697;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym32669,args32670){
var this__32684 = this;
return this_sym32669.call.apply(this_sym32669,[this_sym32669].concat(args32670.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__32685 = this;
return (new cljs.core.PersistentHashSet(this__32685.meta,cljs.core.assoc.cljs$lang$arity$3(this__32685.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__32686 = this;
var this__32687 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32687], 0));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__32688 = this;
return cljs.core.keys(this__32688.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__32689 = this;
return (new cljs.core.PersistentHashSet(this__32689.meta,cljs.core.dissoc.cljs$lang$arity$2(this__32689.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__32690 = this;
return cljs.core.count(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32691 = this;
var and__3937__auto____32692 = cljs.core.set_QMARK_(other);
if(and__3937__auto____32692)
{var and__3937__auto____32693 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3937__auto____32693)
{return cljs.core.every_QMARK_((function (p1__32668_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__32668_SHARP_);
}),other);
} else
{return and__3937__auto____32693;
}
} else
{return and__3937__auto____32692;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__32694 = this;
return (new cljs.core.PersistentHashSet(meta,this__32694.hash_map,this__32694.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__32695 = this;
return this__32695.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__32696 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,this__32696.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map(),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__32698 = cljs.core.count(items);
var i__32699 = 0;
var out__32700 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__32699 < len__32698))
{{
var G__32701 = (i__32699 + 1);
var G__32702 = cljs.core.conj_BANG_(out__32700,(items[i__32699]));
i__32699 = G__32701;
out__32700 = G__32702;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__32700);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__32720 = null;
var G__32720__2 = (function (this_sym32706,k){
var this__32708 = this;
var this_sym32706__32709 = this;
var tcoll__32710 = this_sym32706__32709;
if((cljs.core._lookup.cljs$lang$arity$3(this__32708.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__32720__3 = (function (this_sym32707,k,not_found){
var this__32708 = this;
var this_sym32707__32711 = this;
var tcoll__32712 = this_sym32707__32711;
if((cljs.core._lookup.cljs$lang$arity$3(this__32708.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__32720 = function(this_sym32707,k,not_found){
switch(arguments.length){
case 2:
return G__32720__2.call(this,this_sym32707,k);
case 3:
return G__32720__3.call(this,this_sym32707,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32720;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym32704,args32705){
var this__32713 = this;
return this_sym32704.call.apply(this_sym32704,[this_sym32704].concat(args32705.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__32714 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__32715 = this;
if((cljs.core._lookup.cljs$lang$arity$3(this__32715.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__32716 = this;
return cljs.core.count(this__32716.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__32717 = this;
this__32717.transient_map = cljs.core.dissoc_BANG_(this__32717.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__32718 = this;
this__32718.transient_map = cljs.core.assoc_BANG_(this__32718.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__32719 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(this__32719.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__32723 = this;
var h__2225__auto____32724 = this__32723.__hash;
if(!((h__2225__auto____32724 == null)))
{return h__2225__auto____32724;
} else
{var h__2225__auto____32725 = cljs.core.hash_iset(coll);
this__32723.__hash = h__2225__auto____32725;
return h__2225__auto____32725;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__32726 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__32727 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__32727.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__32753 = null;
var G__32753__2 = (function (this_sym32728,k){
var this__32730 = this;
var this_sym32728__32731 = this;
var coll__32732 = this_sym32728__32731;
return coll__32732.cljs$core$ILookup$_lookup$arity$2(coll__32732,k);
});
var G__32753__3 = (function (this_sym32729,k,not_found){
var this__32730 = this;
var this_sym32729__32733 = this;
var coll__32734 = this_sym32729__32733;
return coll__32734.cljs$core$ILookup$_lookup$arity$3(coll__32734,k,not_found);
});
G__32753 = function(this_sym32729,k,not_found){
switch(arguments.length){
case 2:
return G__32753__2.call(this,this_sym32729,k);
case 3:
return G__32753__3.call(this,this_sym32729,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32753;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym32721,args32722){
var this__32735 = this;
return this_sym32721.call.apply(this_sym32721,[this_sym32721].concat(args32722.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__32736 = this;
return (new cljs.core.PersistentTreeSet(this__32736.meta,cljs.core.assoc.cljs$lang$arity$3(this__32736.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__32737 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core.rseq(this__32737.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__32738 = this;
var this__32739 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32739], 0));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__32740 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq(this__32740.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__32741 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq_from(this__32741.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__32742 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__32743 = this;
return cljs.core._comparator(this__32743.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__32744 = this;
return cljs.core.keys(this__32744.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__32745 = this;
return (new cljs.core.PersistentTreeSet(this__32745.meta,cljs.core.dissoc.cljs$lang$arity$2(this__32745.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__32746 = this;
return cljs.core.count(this__32746.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__32747 = this;
var and__3937__auto____32748 = cljs.core.set_QMARK_(other);
if(and__3937__auto____32748)
{var and__3937__auto____32749 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3937__auto____32749)
{return cljs.core.every_QMARK_((function (p1__32703_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__32703_SHARP_);
}),other);
} else
{return and__3937__auto____32749;
}
} else
{return and__3937__auto____32748;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__32750 = this;
return (new cljs.core.PersistentTreeSet(meta,this__32750.tree_map,this__32750.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__32751 = this;
return this__32751.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__32752 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,this__32752.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map(),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__32758__delegate = function (keys){
var in__32756 = cljs.core.seq(keys);
var out__32757 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq(in__32756))
{{
var G__32759 = cljs.core.next(in__32756);
var G__32760 = cljs.core.conj_BANG_(out__32757,cljs.core.first(in__32756));
in__32756 = G__32759;
out__32757 = G__32760;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__32757);
}
break;
}
};
var G__32758 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__32758__delegate.call(this, keys);
};
G__32758.cljs$lang$maxFixedArity = 0;
G__32758.cljs$lang$applyTo = (function (arglist__32761){
var keys = cljs.core.seq(arglist__32761);;
return G__32758__delegate(keys);
});
G__32758.cljs$lang$arity$variadic = G__32758__delegate;
return G__32758;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__32762){
var keys = cljs.core.seq(arglist__32762);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__32764){
var comparator = cljs.core.first(arglist__32764);
var keys = cljs.core.rest(arglist__32764);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_(coll))
{var n__32770 = cljs.core.count(coll);
return cljs.core.reduce.cljs$lang$arity$3((function (v,i){
var temp__4086__auto____32771 = cljs.core.find(smap,cljs.core.nth.cljs$lang$arity$2(v,i));
if(cljs.core.truth_(temp__4086__auto____32771))
{var e__32772 = temp__4086__auto____32771;
return cljs.core.assoc.cljs$lang$arity$3(v,i,cljs.core.second(e__32772));
} else
{return v;
}
}),coll,cljs.core.take(n__32770,cljs.core.iterate(cljs.core.inc,0)));
} else
{return cljs.core.map.cljs$lang$arity$2((function (p1__32763_SHARP_){
var temp__4086__auto____32773 = cljs.core.find(smap,p1__32763_SHARP_);
if(cljs.core.truth_(temp__4086__auto____32773))
{var e__32774 = temp__4086__auto____32773;
return cljs.core.second(e__32774);
} else
{return p1__32763_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__32804 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__32797,seen){
while(true){
var vec__32798__32799 = p__32797;
var f__32800 = cljs.core.nth.cljs$lang$arity$3(vec__32798__32799,0,null);
var xs__32801 = vec__32798__32799;
var temp__4088__auto____32802 = cljs.core.seq(xs__32801);
if(temp__4088__auto____32802)
{var s__32803 = temp__4088__auto____32802;
if(cljs.core.contains_QMARK_(seen,f__32800))
{{
var G__32805 = cljs.core.rest(s__32803);
var G__32806 = seen;
p__32797 = G__32805;
seen = G__32806;
continue;
}
} else
{return cljs.core.cons(f__32800,step(cljs.core.rest(s__32803),cljs.core.conj.cljs$lang$arity$2(seen,f__32800)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return (step__32804.cljs$lang$arity$2 ? step__32804.cljs$lang$arity$2(coll,cljs.core.PersistentHashSet.EMPTY) : step__32804.call(null,coll,cljs.core.PersistentHashSet.EMPTY));
});
cljs.core.butlast = (function butlast(s){
var ret__32809 = cljs.core.PersistentVector.EMPTY;
var s__32810 = s;
while(true){
if(cljs.core.next(s__32810))
{{
var G__32811 = cljs.core.conj.cljs$lang$arity$2(ret__32809,cljs.core.first(s__32810));
var G__32812 = cljs.core.next(s__32810);
ret__32809 = G__32811;
s__32810 = G__32812;
continue;
}
} else
{return cljs.core.seq(ret__32809);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_(x))
{return x;
} else
{if((function (){var or__3939__auto____32815 = cljs.core.keyword_QMARK_(x);
if(or__3939__auto____32815)
{return or__3939__auto____32815;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__32816 = x.lastIndexOf("/");
if((i__32816 < 0))
{return cljs.core.subs.cljs$lang$arity$2(x,2);
} else
{return cljs.core.subs.cljs$lang$arity$2(x,(i__32816 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3939__auto____32819 = cljs.core.keyword_QMARK_(x);
if(or__3939__auto____32819)
{return or__3939__auto____32819;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__32820 = x.lastIndexOf("/");
if((i__32820 > -1))
{return cljs.core.subs.cljs$lang$arity$3(x,2,i__32820);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__32827 = cljs.core.ObjMap.EMPTY;
var ks__32828 = cljs.core.seq(keys);
var vs__32829 = cljs.core.seq(vals);
while(true){
if((function (){var and__3937__auto____32830 = ks__32828;
if(and__3937__auto____32830)
{return vs__32829;
} else
{return and__3937__auto____32830;
}
})())
{{
var G__32831 = cljs.core.assoc.cljs$lang$arity$3(map__32827,cljs.core.first(ks__32828),cljs.core.first(vs__32829));
var G__32832 = cljs.core.next(ks__32828);
var G__32833 = cljs.core.next(vs__32829);
map__32827 = G__32831;
ks__32828 = G__32832;
vs__32829 = G__32833;
continue;
}
} else
{return map__32827;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) > (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__32836__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__32821_SHARP_,p2__32822_SHARP_){
return max_key.cljs$lang$arity$3(k,p1__32821_SHARP_,p2__32822_SHARP_);
}),max_key.cljs$lang$arity$3(k,x,y),more);
};
var G__32836 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__32836__delegate.call(this, k, x, y, more);
};
G__32836.cljs$lang$maxFixedArity = 3;
G__32836.cljs$lang$applyTo = (function (arglist__32837){
var k = cljs.core.first(arglist__32837);
var x = cljs.core.first(cljs.core.next(arglist__32837));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__32837)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__32837)));
return G__32836__delegate(k, x, y, more);
});
G__32836.cljs$lang$arity$variadic = G__32836__delegate;
return G__32836;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) < (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__32838__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__32834_SHARP_,p2__32835_SHARP_){
return min_key.cljs$lang$arity$3(k,p1__32834_SHARP_,p2__32835_SHARP_);
}),min_key.cljs$lang$arity$3(k,x,y),more);
};
var G__32838 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__32838__delegate.call(this, k, x, y, more);
};
G__32838.cljs$lang$maxFixedArity = 3;
G__32838.cljs$lang$applyTo = (function (arglist__32839){
var k = cljs.core.first(arglist__32839);
var x = cljs.core.first(cljs.core.next(arglist__32839));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__32839)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__32839)));
return G__32838__delegate(k, x, y, more);
});
G__32838.cljs$lang$arity$variadic = G__32838__delegate;
return G__32838;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.cljs$lang$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____32842 = cljs.core.seq(coll);
if(temp__4088__auto____32842)
{var s__32843 = temp__4088__auto____32842;
return cljs.core.cons(cljs.core.take(n,s__32843),partition_all.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__32843)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____32846 = cljs.core.seq(coll);
if(temp__4088__auto____32846)
{var s__32847 = temp__4088__auto____32846;
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__32847)) : pred.call(null,cljs.core.first(s__32847)))))
{return cljs.core.cons(cljs.core.first(s__32847),take_while(pred,cljs.core.rest(s__32847)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__32849 = cljs.core._comparator(sc);
return (test.cljs$lang$arity$2 ? test.cljs$lang$arity$2((comp__32849.cljs$lang$arity$2 ? comp__32849.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__32849.call(null,cljs.core._entry_key(sc,e),key)),0) : test.call(null,(comp__32849.cljs$lang$arity$2 ? comp__32849.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__32849.call(null,cljs.core._entry_key(sc,e),key)),0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__32861 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4088__auto____32862 = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4088__auto____32862))
{var vec__32863__32864 = temp__4088__auto____32862;
var e__32865 = cljs.core.nth.cljs$lang$arity$3(vec__32863__32864,0,null);
var s__32866 = vec__32863__32864;
if(cljs.core.truth_((include__32861.cljs$lang$arity$1 ? include__32861.cljs$lang$arity$1(e__32865) : include__32861.call(null,e__32865))))
{return s__32866;
} else
{return cljs.core.next(s__32866);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__32861,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4088__auto____32867 = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4088__auto____32867))
{var vec__32868__32869 = temp__4088__auto____32867;
var e__32870 = cljs.core.nth.cljs$lang$arity$3(vec__32868__32869,0,null);
var s__32871 = vec__32868__32869;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e__32870))?s__32871:cljs.core.next(s__32871)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__32883 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4088__auto____32884 = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4088__auto____32884))
{var vec__32885__32886 = temp__4088__auto____32884;
var e__32887 = cljs.core.nth.cljs$lang$arity$3(vec__32885__32886,0,null);
var s__32888 = vec__32885__32886;
if(cljs.core.truth_((include__32883.cljs$lang$arity$1 ? include__32883.cljs$lang$arity$1(e__32887) : include__32883.call(null,e__32887))))
{return s__32888;
} else
{return cljs.core.next(s__32888);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__32883,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4088__auto____32889 = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4088__auto____32889))
{var vec__32890__32891 = temp__4088__auto____32889;
var e__32892 = cljs.core.nth.cljs$lang$arity$3(vec__32890__32891,0,null);
var s__32893 = vec__32890__32891;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e__32892))?s__32893:cljs.core.next(s__32893)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__32894 = this;
var h__2225__auto____32895 = this__32894.__hash;
if(!((h__2225__auto____32895 == null)))
{return h__2225__auto____32895;
} else
{var h__2225__auto____32896 = cljs.core.hash_coll(rng);
this__32894.__hash = h__2225__auto____32896;
return h__2225__auto____32896;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__32897 = this;
if((this__32897.step > 0))
{if(((this__32897.start + this__32897.step) < this__32897.end))
{return (new cljs.core.Range(this__32897.meta,(this__32897.start + this__32897.step),this__32897.end,this__32897.step,null));
} else
{return null;
}
} else
{if(((this__32897.start + this__32897.step) > this__32897.end))
{return (new cljs.core.Range(this__32897.meta,(this__32897.start + this__32897.step),this__32897.end,this__32897.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__32898 = this;
return cljs.core.cons(o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__32899 = this;
var this__32900 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__32900], 0));
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__32901 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__32902 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__32903 = this;
if((this__32903.step > 0))
{if((this__32903.start < this__32903.end))
{return rng;
} else
{return null;
}
} else
{if((this__32903.start > this__32903.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__32904 = this;
if(cljs.core.not(rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__32904.end - this__32904.start) / this__32904.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__32905 = this;
return this__32905.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__32906 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__32906.meta,(this__32906.start + this__32906.step),this__32906.end,this__32906.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__32907 = this;
return cljs.core.equiv_sequential(rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__32908 = this;
return (new cljs.core.Range(meta,this__32908.start,this__32908.end,this__32908.step,this__32908.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__32909 = this;
return this__32909.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__32910 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__32910.start + (n * this__32910.step));
} else
{if((function (){var and__3937__auto____32911 = (this__32910.start > this__32910.end);
if(and__3937__auto____32911)
{return (this__32910.step === 0);
} else
{return and__3937__auto____32911;
}
})())
{return this__32910.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__32912 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__32912.start + (n * this__32912.step));
} else
{if((function (){var and__3937__auto____32913 = (this__32912.start > this__32912.end);
if(and__3937__auto____32913)
{return (this__32912.step === 0);
} else
{return and__3937__auto____32913;
}
})())
{return this__32912.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__32914 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__32914.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$lang$arity$3(0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.cljs$lang$arity$3(0,end,1);
});
var range__2 = (function (start,end){
return range.cljs$lang$arity$3(start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____32917 = cljs.core.seq(coll);
if(temp__4088__auto____32917)
{var s__32918 = temp__4088__auto____32917;
return cljs.core.cons(cljs.core.first(s__32918),take_nth(n,cljs.core.drop(n,s__32918)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while(pred,coll),cljs.core.drop_while(pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____32925 = cljs.core.seq(coll);
if(temp__4088__auto____32925)
{var s__32926 = temp__4088__auto____32925;
var fst__32927 = cljs.core.first(s__32926);
var fv__32928 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(fst__32927) : f.call(null,fst__32927));
var run__32929 = cljs.core.cons(fst__32927,cljs.core.take_while((function (p1__32919_SHARP_){
return cljs.core._EQ_.cljs$lang$arity$2(fv__32928,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(p1__32919_SHARP_) : f.call(null,p1__32919_SHARP_)));
}),cljs.core.next(s__32926)));
return cljs.core.cons(run__32929,partition_by(f,cljs.core.seq(cljs.core.drop(cljs.core.count(run__32929),s__32926))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (counts,x){
return cljs.core.assoc_BANG_(counts,x,(cljs.core._lookup.cljs$lang$arity$3(counts,x,0) + 1));
}),cljs.core.transient$(cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4086__auto____32944 = cljs.core.seq(coll);
if(temp__4086__auto____32944)
{var s__32945 = temp__4086__auto____32944;
return reductions.cljs$lang$arity$3(f,cljs.core.first(s__32945),cljs.core.rest(s__32945));
} else
{return cljs.core.list.cljs$lang$arity$1((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____32946 = cljs.core.seq(coll);
if(temp__4088__auto____32946)
{var s__32947 = temp__4088__auto____32946;
return reductions.cljs$lang$arity$3(f,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(init,cljs.core.first(s__32947)) : f.call(null,init,cljs.core.first(s__32947))),cljs.core.rest(s__32947));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__32950 = null;
var G__32950__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null))], 0));
});
var G__32950__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x))], 0));
});
var G__32950__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y))], 0));
});
var G__32950__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z))], 0));
});
var G__32950__4 = (function() { 
var G__32951__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args)], 0));
};
var G__32951 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__32951__delegate.call(this, x, y, z, args);
};
G__32951.cljs$lang$maxFixedArity = 3;
G__32951.cljs$lang$applyTo = (function (arglist__32952){
var x = cljs.core.first(arglist__32952);
var y = cljs.core.first(cljs.core.next(arglist__32952));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__32952)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__32952)));
return G__32951__delegate(x, y, z, args);
});
G__32951.cljs$lang$arity$variadic = G__32951__delegate;
return G__32951;
})()
;
G__32950 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__32950__0.call(this);
case 1:
return G__32950__1.call(this,x);
case 2:
return G__32950__2.call(this,x,y);
case 3:
return G__32950__3.call(this,x,y,z);
default:
return G__32950__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__32950.cljs$lang$maxFixedArity = 3;
G__32950.cljs$lang$applyTo = G__32950__4.cljs$lang$applyTo;
return G__32950;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__32953 = null;
var G__32953__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))], 0));
});
var G__32953__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))], 0));
});
var G__32953__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))], 0));
});
var G__32953__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))], 0));
});
var G__32953__4 = (function() { 
var G__32954__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)], 0));
};
var G__32954 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__32954__delegate.call(this, x, y, z, args);
};
G__32954.cljs$lang$maxFixedArity = 3;
G__32954.cljs$lang$applyTo = (function (arglist__32955){
var x = cljs.core.first(arglist__32955);
var y = cljs.core.first(cljs.core.next(arglist__32955));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__32955)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__32955)));
return G__32954__delegate(x, y, z, args);
});
G__32954.cljs$lang$arity$variadic = G__32954__delegate;
return G__32954;
})()
;
G__32953 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__32953__0.call(this);
case 1:
return G__32953__1.call(this,x);
case 2:
return G__32953__2.call(this,x,y);
case 3:
return G__32953__3.call(this,x,y,z);
default:
return G__32953__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__32953.cljs$lang$maxFixedArity = 3;
G__32953.cljs$lang$applyTo = G__32953__4.cljs$lang$applyTo;
return G__32953;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__32956 = null;
var G__32956__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null)),(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))], 0));
});
var G__32956__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x)),(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))], 0));
});
var G__32956__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y)),(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))], 0));
});
var G__32956__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z)),(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))], 0));
});
var G__32956__4 = (function() { 
var G__32957__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)], 0));
};
var G__32957 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__32957__delegate.call(this, x, y, z, args);
};
G__32957.cljs$lang$maxFixedArity = 3;
G__32957.cljs$lang$applyTo = (function (arglist__32958){
var x = cljs.core.first(arglist__32958);
var y = cljs.core.first(cljs.core.next(arglist__32958));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__32958)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__32958)));
return G__32957__delegate(x, y, z, args);
});
G__32957.cljs$lang$arity$variadic = G__32957__delegate;
return G__32957;
})()
;
G__32956 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__32956__0.call(this);
case 1:
return G__32956__1.call(this,x);
case 2:
return G__32956__2.call(this,x,y);
case 3:
return G__32956__3.call(this,x,y,z);
default:
return G__32956__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__32956.cljs$lang$maxFixedArity = 3;
G__32956.cljs$lang$applyTo = G__32956__4.cljs$lang$applyTo;
return G__32956;
})()
});
var juxt__4 = (function() { 
var G__32959__delegate = function (f,g,h,fs){
var fs__32949 = cljs.core.list_STAR_.cljs$lang$arity$4(f,g,h,fs);
return (function() {
var G__32960 = null;
var G__32960__0 = (function (){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__32930_SHARP_,p2__32931_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__32930_SHARP_,(p2__32931_SHARP_.cljs$lang$arity$0 ? p2__32931_SHARP_.cljs$lang$arity$0() : p2__32931_SHARP_.call(null)));
}),cljs.core.PersistentVector.EMPTY,fs__32949);
});
var G__32960__1 = (function (x){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__32932_SHARP_,p2__32933_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__32932_SHARP_,(p2__32933_SHARP_.cljs$lang$arity$1 ? p2__32933_SHARP_.cljs$lang$arity$1(x) : p2__32933_SHARP_.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,fs__32949);
});
var G__32960__2 = (function (x,y){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__32934_SHARP_,p2__32935_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__32934_SHARP_,(p2__32935_SHARP_.cljs$lang$arity$2 ? p2__32935_SHARP_.cljs$lang$arity$2(x,y) : p2__32935_SHARP_.call(null,x,y)));
}),cljs.core.PersistentVector.EMPTY,fs__32949);
});
var G__32960__3 = (function (x,y,z){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__32936_SHARP_,p2__32937_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__32936_SHARP_,(p2__32937_SHARP_.cljs$lang$arity$3 ? p2__32937_SHARP_.cljs$lang$arity$3(x,y,z) : p2__32937_SHARP_.call(null,x,y,z)));
}),cljs.core.PersistentVector.EMPTY,fs__32949);
});
var G__32960__4 = (function() { 
var G__32961__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__32938_SHARP_,p2__32939_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__32938_SHARP_,cljs.core.apply.cljs$lang$arity$5(p2__32939_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__32949);
};
var G__32961 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__32961__delegate.call(this, x, y, z, args);
};
G__32961.cljs$lang$maxFixedArity = 3;
G__32961.cljs$lang$applyTo = (function (arglist__32962){
var x = cljs.core.first(arglist__32962);
var y = cljs.core.first(cljs.core.next(arglist__32962));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__32962)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__32962)));
return G__32961__delegate(x, y, z, args);
});
G__32961.cljs$lang$arity$variadic = G__32961__delegate;
return G__32961;
})()
;
G__32960 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__32960__0.call(this);
case 1:
return G__32960__1.call(this,x);
case 2:
return G__32960__2.call(this,x,y);
case 3:
return G__32960__3.call(this,x,y,z);
default:
return G__32960__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__32960.cljs$lang$maxFixedArity = 3;
G__32960.cljs$lang$applyTo = G__32960__4.cljs$lang$applyTo;
return G__32960;
})()
};
var G__32959 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__32959__delegate.call(this, f, g, h, fs);
};
G__32959.cljs$lang$maxFixedArity = 3;
G__32959.cljs$lang$applyTo = (function (arglist__32963){
var f = cljs.core.first(arglist__32963);
var g = cljs.core.first(cljs.core.next(arglist__32963));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__32963)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__32963)));
return G__32959__delegate(f, g, h, fs);
});
G__32959.cljs$lang$arity$variadic = G__32959__delegate;
return G__32959;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll))
{{
var G__32966 = cljs.core.next(coll);
coll = G__32966;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____32965 = cljs.core.seq(coll);
if(and__3937__auto____32965)
{return (n > 0);
} else
{return and__3937__auto____32965;
}
})()))
{{
var G__32967 = (n - 1);
var G__32968 = cljs.core.next(coll);
n = G__32967;
coll = G__32968;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$lang$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$lang$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__32970 = re.exec(s);
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(matches__32970),s))
{if((cljs.core.count(matches__32970) === 1))
{return cljs.core.first(matches__32970);
} else
{return cljs.core.vec(matches__32970);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__32972 = re.exec(s);
if((matches__32972 == null))
{return null;
} else
{if((cljs.core.count(matches__32972) === 1))
{return cljs.core.first(matches__32972);
} else
{return cljs.core.vec(matches__32972);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__32977 = cljs.core.re_find(re,s);
var match_idx__32978 = s.search(re);
var match_str__32979 = ((cljs.core.coll_QMARK_(match_data__32977))?cljs.core.first(match_data__32977):match_data__32977);
var post_match__32980 = cljs.core.subs.cljs$lang$arity$2(s,(match_idx__32978 + cljs.core.count(match_str__32979)));
if(cljs.core.truth_(match_data__32977))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(match_data__32977,re_seq(re,post_match__32980));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__32987__32988 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___32989 = cljs.core.nth.cljs$lang$arity$3(vec__32987__32988,0,null);
var flags__32990 = cljs.core.nth.cljs$lang$arity$3(vec__32987__32988,1,null);
var pattern__32991 = cljs.core.nth.cljs$lang$arity$3(vec__32987__32988,2,null);
return (new RegExp(pattern__32991,flags__32990));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.cljs$lang$arity$2((function (p1__32981_SHARP_){
return (print_one.cljs$lang$arity$2 ? print_one.cljs$lang$arity$2(p1__32981_SHARP_,opts) : print_one.call(null,p1__32981_SHARP_,opts));
}),coll))),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([end], true)], 0));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_(x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.cljs$lang$arity$1("nil");
} else
{if((void 0 === obj))
{return cljs.core.list.cljs$lang$arity$1("#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.cljs$lang$arity$2((cljs.core.truth_((function (){var and__3937__auto____33001 = cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3937__auto____33001))
{var and__3937__auto____33005 = (function (){var G__33002__33003 = obj;
if(G__33002__33003)
{if((function (){var or__3939__auto____33004 = (G__33002__33003.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3939__auto____33004)
{return or__3939__auto____33004;
} else
{return G__33002__33003.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__33002__33003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__33002__33003);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__33002__33003);
}
})();
if(cljs.core.truth_(and__3937__auto____33005))
{return cljs.core.meta(obj);
} else
{return and__3937__auto____33005;
}
} else
{return and__3937__auto____33001;
}
})())?cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["^"], true),pr_seq(cljs.core.meta(obj),opts),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([" "], true)], 0)):null),(((function (){var and__3937__auto____33006 = !((obj == null));
if(and__3937__auto____33006)
{return obj.cljs$lang$type;
} else
{return and__3937__auto____33006;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__33007__33008 = obj;
if(G__33007__33008)
{if((function (){var or__3939__auto____33009 = (G__33007__33008.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3939__auto____33009)
{return or__3939__auto____33009;
} else
{return G__33007__33008.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__33007__33008.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__33007__33008);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__33007__33008);
}
})())?cljs.core._pr_seq(obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_(obj))?cljs.core.list.cljs$lang$arity$3("#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__33029 = (new goog.string.StringBuffer());
var G__33030__33031 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__33030__33031)
{var string__33032 = cljs.core.first(G__33030__33031);
var G__33030__33033 = G__33030__33031;
while(true){
sb__33029.append(string__33032);
var temp__4088__auto____33034 = cljs.core.next(G__33030__33033);
if(temp__4088__auto____33034)
{var G__33030__33035 = temp__4088__auto____33034;
{
var G__33048 = cljs.core.first(G__33030__33035);
var G__33049 = G__33030__33035;
string__33032 = G__33048;
G__33030__33033 = G__33049;
continue;
}
} else
{}
break;
}
} else
{}
var G__33036__33037 = cljs.core.seq(cljs.core.next(objs));
if(G__33036__33037)
{var obj__33038 = cljs.core.first(G__33036__33037);
var G__33036__33039 = G__33036__33037;
while(true){
sb__33029.append(" ");
var G__33040__33041 = cljs.core.seq(cljs.core.pr_seq(obj__33038,opts));
if(G__33040__33041)
{var string__33042 = cljs.core.first(G__33040__33041);
var G__33040__33043 = G__33040__33041;
while(true){
sb__33029.append(string__33042);
var temp__4088__auto____33044 = cljs.core.next(G__33040__33043);
if(temp__4088__auto____33044)
{var G__33040__33045 = temp__4088__auto____33044;
{
var G__33050 = cljs.core.first(G__33040__33045);
var G__33051 = G__33040__33045;
string__33042 = G__33050;
G__33040__33043 = G__33051;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4088__auto____33046 = cljs.core.next(G__33036__33039);
if(temp__4088__auto____33046)
{var G__33036__33047 = temp__4088__auto____33046;
{
var G__33052 = cljs.core.first(G__33036__33047);
var G__33053 = G__33036__33047;
obj__33038 = G__33052;
G__33036__33039 = G__33053;
continue;
}
} else
{}
break;
}
} else
{}
return sb__33029;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb(objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__33055 = cljs.core.pr_sb(objs,opts);
sb__33055.append("\n");
return [cljs.core.str(sb__33055)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__33074__33075 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__33074__33075)
{var string__33076 = cljs.core.first(G__33074__33075);
var G__33074__33077 = G__33074__33075;
while(true){
cljs.core.string_print(string__33076);
var temp__4088__auto____33078 = cljs.core.next(G__33074__33077);
if(temp__4088__auto____33078)
{var G__33074__33079 = temp__4088__auto____33078;
{
var G__33092 = cljs.core.first(G__33074__33079);
var G__33093 = G__33074__33079;
string__33076 = G__33092;
G__33074__33077 = G__33093;
continue;
}
} else
{}
break;
}
} else
{}
var G__33080__33081 = cljs.core.seq(cljs.core.next(objs));
if(G__33080__33081)
{var obj__33082 = cljs.core.first(G__33080__33081);
var G__33080__33083 = G__33080__33081;
while(true){
cljs.core.string_print(" ");
var G__33084__33085 = cljs.core.seq(cljs.core.pr_seq(obj__33082,opts));
if(G__33084__33085)
{var string__33086 = cljs.core.first(G__33084__33085);
var G__33084__33087 = G__33084__33085;
while(true){
cljs.core.string_print(string__33086);
var temp__4088__auto____33088 = cljs.core.next(G__33084__33087);
if(temp__4088__auto____33088)
{var G__33084__33089 = temp__4088__auto____33088;
{
var G__33094 = cljs.core.first(G__33084__33089);
var G__33095 = G__33084__33089;
string__33086 = G__33094;
G__33084__33087 = G__33095;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4088__auto____33090 = cljs.core.next(G__33080__33083);
if(temp__4088__auto____33090)
{var G__33080__33091 = temp__4088__auto____33090;
{
var G__33096 = cljs.core.first(G__33080__33091);
var G__33097 = G__33080__33091;
obj__33082 = G__33096;
G__33080__33083 = G__33097;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush();
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__33098){
var objs = cljs.core.seq(arglist__33098);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__33099){
var objs = cljs.core.seq(arglist__33099);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__33100){
var objs = cljs.core.seq(arglist__33100);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__33101){
var objs = cljs.core.seq(arglist__33101);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__33102){
var objs = cljs.core.seq(arglist__33102);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
return cljs.core.newline(cljs.core.pr_opts());
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__33103){
var objs = cljs.core.seq(arglist__33103);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__33104){
var objs = cljs.core.seq(arglist__33104);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
return cljs.core.newline(cljs.core.pr_opts());
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__33105){
var objs = cljs.core.seq(arglist__33105);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$3(cljs.core.format,fmt,args)], 0));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__33106){
var fmt = cljs.core.first(arglist__33106);
var args = cljs.core.rest(arglist__33106);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__33107 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__33107,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__33108 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__33108,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__33109 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__33109,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str(":"),cljs.core.str((function (){var temp__4088__auto____33110 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__4088__auto____33110))
{var nspc__33111 = temp__4088__auto____33110;
return [cljs.core.str(nspc__33111),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str((function (){var temp__4088__auto____33112 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__4088__auto____33112))
{var nspc__33113 = temp__4088__auto____33112;
return [cljs.core.str(nspc__33113),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.cljs$lang$arity$1((cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__33114 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__33114,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.cljs$lang$arity$1("()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__33116 = (function (n,len){
var ns__33115 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns__33115) < len))
{{
var G__33118 = [cljs.core.str("0"),cljs.core.str(ns__33115)].join('');
ns__33115 = G__33118;
continue;
}
} else
{return ns__33115;
}
break;
}
});
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str((normalize__33116.cljs$lang$arity$2 ? normalize__33116.cljs$lang$arity$2((d.getUTCMonth() + 1),2) : normalize__33116.call(null,(d.getUTCMonth() + 1),2))),cljs.core.str("-"),cljs.core.str((normalize__33116.cljs$lang$arity$2 ? normalize__33116.cljs$lang$arity$2(d.getUTCDate(),2) : normalize__33116.call(null,d.getUTCDate(),2))),cljs.core.str("T"),cljs.core.str((normalize__33116.cljs$lang$arity$2 ? normalize__33116.cljs$lang$arity$2(d.getUTCHours(),2) : normalize__33116.call(null,d.getUTCHours(),2))),cljs.core.str(":"),cljs.core.str((normalize__33116.cljs$lang$arity$2 ? normalize__33116.cljs$lang$arity$2(d.getUTCMinutes(),2) : normalize__33116.call(null,d.getUTCMinutes(),2))),cljs.core.str(":"),cljs.core.str((normalize__33116.cljs$lang$arity$2 ? normalize__33116.cljs$lang$arity$2(d.getUTCSeconds(),2) : normalize__33116.call(null,d.getUTCSeconds(),2))),cljs.core.str("."),cljs.core.str((normalize__33116.cljs$lang$arity$2 ? normalize__33116.cljs$lang$arity$2(d.getUTCMilliseconds(),3) : normalize__33116.call(null,d.getUTCMilliseconds(),3))),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__33117 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__33117,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.cljs$lang$arity$2(x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__33119 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__33120 = this;
var G__33121__33122 = cljs.core.seq(this__33120.watches);
if(G__33121__33122)
{var G__33124__33126 = cljs.core.first(G__33121__33122);
var vec__33125__33127 = G__33124__33126;
var key__33128 = cljs.core.nth.cljs$lang$arity$3(vec__33125__33127,0,null);
var f__33129 = cljs.core.nth.cljs$lang$arity$3(vec__33125__33127,1,null);
var G__33121__33130 = G__33121__33122;
var G__33124__33131 = G__33124__33126;
var G__33121__33132 = G__33121__33130;
while(true){
var vec__33133__33134 = G__33124__33131;
var key__33135 = cljs.core.nth.cljs$lang$arity$3(vec__33133__33134,0,null);
var f__33136 = cljs.core.nth.cljs$lang$arity$3(vec__33133__33134,1,null);
var G__33121__33137 = G__33121__33132;
(f__33136.cljs$lang$arity$4 ? f__33136.cljs$lang$arity$4(key__33135,this$,oldval,newval) : f__33136.call(null,key__33135,this$,oldval,newval));
var temp__4088__auto____33138 = cljs.core.next(G__33121__33137);
if(temp__4088__auto____33138)
{var G__33121__33139 = temp__4088__auto____33138;
{
var G__33146 = cljs.core.first(G__33121__33139);
var G__33147 = G__33121__33139;
G__33124__33131 = G__33146;
G__33121__33132 = G__33147;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__33140 = this;
return this$.watches = cljs.core.assoc.cljs$lang$arity$3(this__33140.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__33141 = this;
return this$.watches = cljs.core.dissoc.cljs$lang$arity$2(this__33141.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__33142 = this;
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq(this__33142.state,opts),cljs.core.array_seq([">"], 0));
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__33143 = this;
return this__33143.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__33144 = this;
return this__33144.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__33145 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__33159__delegate = function (x,p__33148){
var map__33154__33155 = p__33148;
var map__33154__33156 = ((cljs.core.seq_QMARK_(map__33154__33155))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__33154__33155):map__33154__33155);
var validator__33157 = cljs.core._lookup.cljs$lang$arity$3(map__33154__33156,"\uFDD0'validator",null);
var meta__33158 = cljs.core._lookup.cljs$lang$arity$3(map__33154__33156,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__33158,validator__33157,null));
};
var G__33159 = function (x,var_args){
var p__33148 = null;
if (goog.isDef(var_args)) {
  p__33148 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__33159__delegate.call(this, x, p__33148);
};
G__33159.cljs$lang$maxFixedArity = 1;
G__33159.cljs$lang$applyTo = (function (arglist__33160){
var x = cljs.core.first(arglist__33160);
var p__33148 = cljs.core.rest(arglist__33160);
return G__33159__delegate(x, p__33148);
});
G__33159.cljs$lang$arity$variadic = G__33159__delegate;
return G__33159;
})()
;
atom = function(x,var_args){
var p__33148 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4088__auto____33164 = a.validator;
if(cljs.core.truth_(temp__4088__auto____33164))
{var validate__33165 = temp__4088__auto____33164;
if(cljs.core.truth_((validate__33165.cljs$lang$arity$1 ? validate__33165.cljs$lang$arity$1(new_value) : validate__33165.call(null,new_value))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))], 0)))].join('')));
}
} else
{}
var old_value__33166 = a.state;
a.state = new_value;
cljs.core._notify_watches(a,old_value__33166,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a.state) : f.call(null,a.state)));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a.state,x) : f.call(null,a.state,x)));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a.state,x,y) : f.call(null,a.state,x,y)));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a.state,x,y,z) : f.call(null,a.state,x,y,z)));
});
var swap_BANG___6 = (function() { 
var G__33167__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$lang$arity$variadic(f,a.state,x,y,z,cljs.core.array_seq([more], 0)));
};
var G__33167 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__33167__delegate.call(this, a, f, x, y, z, more);
};
G__33167.cljs$lang$maxFixedArity = 5;
G__33167.cljs$lang$applyTo = (function (arglist__33168){
var a = cljs.core.first(arglist__33168);
var f = cljs.core.first(cljs.core.next(arglist__33168));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__33168)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__33168))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__33168)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__33168)))));
return G__33167__delegate(a, f, x, y, z, more);
});
G__33167.cljs$lang$arity$variadic = G__33167__delegate;
return G__33167;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$lang$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$lang$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__33169){
var iref = cljs.core.first(arglist__33169);
var f = cljs.core.first(cljs.core.next(arglist__33169));
var args = cljs.core.rest(cljs.core.next(arglist__33169));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$lang$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.cljs$lang$arity$1(0);
} else
{}
return cljs.core.symbol.cljs$lang$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$lang$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__33170 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref(this__33170.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__33171 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.cljs$lang$arity$2(this__33171.state,(function (p__33172){
var map__33173__33174 = p__33172;
var map__33173__33175 = ((cljs.core.seq_QMARK_(map__33173__33174))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__33173__33174):map__33173__33174);
var curr_state__33176 = map__33173__33175;
var done__33177 = cljs.core._lookup.cljs$lang$arity$3(map__33173__33175,"\uFDD0'done",null);
if(cljs.core.truth_(done__33177))
{return curr_state__33176;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":(this__33171.f.cljs$lang$arity$0 ? this__33171.f.cljs$lang$arity$0() : this__33171.f.call(null))});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_(cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x))
{return cljs.core.deref(x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__33206__33207 = options;
var map__33206__33208 = ((cljs.core.seq_QMARK_(map__33206__33207))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__33206__33207):map__33206__33207);
var keywordize_keys__33209 = cljs.core._lookup.cljs$lang$arity$3(map__33206__33208,"\uFDD0'keywordize-keys",null);
var keyfn__33210 = (cljs.core.truth_(keywordize_keys__33209)?cljs.core.keyword:cljs.core.str);
var f__33233 = (function thisfn(x){
if(cljs.core.seq_QMARK_(x))
{return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.coll_QMARK_(x))
{return cljs.core.into(cljs.core.empty(x),cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if((cljs.core.type(x) === Object))
{return cljs.core.into(cljs.core.ObjMap.EMPTY,(function (){var iter__2495__auto____33232 = (function iter__33222(s__33223){
return (new cljs.core.LazySeq(null,false,(function (){
var s__33223__33228 = s__33223;
while(true){
var temp__4088__auto____33229 = cljs.core.seq(s__33223__33228);
if(temp__4088__auto____33229)
{var xs__4574__auto____33230 = temp__4088__auto____33229;
var k__33231 = cljs.core.first(xs__4574__auto____33230);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([(keyfn__33210.cljs$lang$arity$1 ? keyfn__33210.cljs$lang$arity$1(k__33231) : keyfn__33210.call(null,k__33231)),thisfn((x[k__33231]))], true),iter__33222(cljs.core.rest(s__33223__33228)));
} else
{return null;
}
break;
}
}),null));
});
return (iter__2495__auto____33232.cljs$lang$arity$1 ? iter__2495__auto____33232.cljs$lang$arity$1(cljs.core.js_keys(x)) : iter__2495__auto____33232.call(null,cljs.core.js_keys(x)));
})());
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
return (f__33233.cljs$lang$arity$1 ? f__33233.cljs$lang$arity$1(x) : f__33233.call(null,x));
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__33234){
var x = cljs.core.first(arglist__33234);
var options = cljs.core.rest(arglist__33234);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__33239 = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
return (function() { 
var G__33243__delegate = function (args){
var temp__4086__auto____33240 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(mem__33239),args,null);
if(cljs.core.truth_(temp__4086__auto____33240))
{var v__33241 = temp__4086__auto____33240;
return v__33241;
} else
{var ret__33242 = cljs.core.apply.cljs$lang$arity$2(f,args);
cljs.core.swap_BANG_.cljs$lang$arity$4(mem__33239,cljs.core.assoc,args,ret__33242);
return ret__33242;
}
};
var G__33243 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__33243__delegate.call(this, args);
};
G__33243.cljs$lang$maxFixedArity = 0;
G__33243.cljs$lang$applyTo = (function (arglist__33244){
var args = cljs.core.seq(arglist__33244);;
return G__33243__delegate(args);
});
G__33243.cljs$lang$arity$variadic = G__33243__delegate;
return G__33243;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__33246 = (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret__33246))
{{
var G__33247 = ret__33246;
f = G__33247;
continue;
}
} else
{return ret__33246;
}
break;
}
});
var trampoline__2 = (function() { 
var G__33248__delegate = function (f,args){
return trampoline.cljs$lang$arity$1((function (){
return cljs.core.apply.cljs$lang$arity$2(f,args);
}));
};
var G__33248 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__33248__delegate.call(this, f, args);
};
G__33248.cljs$lang$maxFixedArity = 1;
G__33248.cljs$lang$applyTo = (function (arglist__33249){
var f = cljs.core.first(arglist__33249);
var args = cljs.core.rest(arglist__33249);
return G__33248__delegate(f, args);
});
G__33248.cljs$lang$arity$variadic = G__33248__delegate;
return G__33248;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$lang$arity$1(1);
});
var rand__1 = (function (n){
return ((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)) : Math.floor.call(null,((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$lang$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,x){
var k__33251 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x));
return cljs.core.assoc.cljs$lang$arity$3(ret,k__33251,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(ret,k__33251,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.cljs$lang$arity$1(cljs.core.make_hierarchy());
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$lang$arity$3(cljs.core.deref(cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3939__auto____33260 = cljs.core._EQ_.cljs$lang$arity$2(child,parent);
if(or__3939__auto____33260)
{return or__3939__auto____33260;
} else
{var or__3939__auto____33261 = cljs.core.contains_QMARK_((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3939__auto____33261)
{return or__3939__auto____33261;
} else
{var and__3937__auto____33262 = cljs.core.vector_QMARK_(parent);
if(and__3937__auto____33262)
{var and__3937__auto____33263 = cljs.core.vector_QMARK_(child);
if(and__3937__auto____33263)
{var and__3937__auto____33264 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3937__auto____33264)
{var ret__33265 = true;
var i__33266 = 0;
while(true){
if((function (){var or__3939__auto____33267 = cljs.core.not(ret__33265);
if(or__3939__auto____33267)
{return or__3939__auto____33267;
} else
{return (i__33266 === cljs.core.count(parent));
}
})())
{return ret__33265;
} else
{{
var G__33268 = isa_QMARK_.cljs$lang$arity$3(h,(child.cljs$lang$arity$1 ? child.cljs$lang$arity$1(i__33266) : child.call(null,i__33266)),(parent.cljs$lang$arity$1 ? parent.cljs$lang$arity$1(i__33266) : parent.call(null,i__33266)));
var G__33269 = (i__33266 + 1);
ret__33265 = G__33268;
i__33266 = G__33269;
continue;
}
}
break;
}
} else
{return and__3937__auto____33264;
}
} else
{return and__3937__auto____33263;
}
} else
{return and__3937__auto____33262;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724,"\uFDD0'column",12))], 0)))].join('')));
}
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$lang$arity$2(tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728,"\uFDD0'column",12))], 0)))].join('')));
}
var tp__33278 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__33279 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__33280 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__33281 = (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,k){
return cljs.core.assoc.cljs$lang$arity$3(ret,k,cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core._lookup.cljs$lang$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(targets.cljs$lang$arity$1 ? targets.cljs$lang$arity$1(target) : targets.call(null,target)))));
}),m,cljs.core.cons(source,(sources.cljs$lang$arity$1 ? sources.cljs$lang$arity$1(source) : sources.call(null,source))));
});
var or__3939__auto____33282 = ((cljs.core.contains_QMARK_((tp__33278.cljs$lang$arity$1 ? tp__33278.cljs$lang$arity$1(tag) : tp__33278.call(null,tag)),parent))?null:(function (){if(cljs.core.contains_QMARK_((ta__33280.cljs$lang$arity$1 ? ta__33280.cljs$lang$arity$1(tag) : ta__33280.call(null,tag)),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_((ta__33280.cljs$lang$arity$1 ? ta__33280.cljs$lang$arity$1(parent) : ta__33280.call(null,parent)),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(tp__33278,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":(tf__33281.cljs$lang$arity$5 ? tf__33281.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__33279,parent,ta__33280) : tf__33281.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__33279,parent,ta__33280)),"\uFDD0'descendants":(tf__33281.cljs$lang$arity$5 ? tf__33281.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__33280,tag,td__33279) : tf__33281.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__33280,tag,td__33279))});
})());
if(cljs.core.truth_(or__3939__auto____33282))
{return or__3939__auto____33282;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__33287 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__33288 = (cljs.core.truth_((parentMap__33287.cljs$lang$arity$1 ? parentMap__33287.cljs$lang$arity$1(tag) : parentMap__33287.call(null,tag)))?cljs.core.disj.cljs$lang$arity$2((parentMap__33287.cljs$lang$arity$1 ? parentMap__33287.cljs$lang$arity$1(tag) : parentMap__33287.call(null,tag)),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__33289 = (cljs.core.truth_(cljs.core.not_empty(childsParents__33288))?cljs.core.assoc.cljs$lang$arity$3(parentMap__33287,tag,childsParents__33288):cljs.core.dissoc.cljs$lang$arity$2(parentMap__33287,tag));
var deriv_seq__33290 = cljs.core.flatten(cljs.core.map.cljs$lang$arity$2((function (p1__33270_SHARP_){
return cljs.core.cons(cljs.core.first(p1__33270_SHARP_),cljs.core.interpose(cljs.core.first(p1__33270_SHARP_),cljs.core.second(p1__33270_SHARP_)));
}),cljs.core.seq(newParents__33289)));
if(cljs.core.contains_QMARK_((parentMap__33287.cljs$lang$arity$1 ? parentMap__33287.cljs$lang$arity$1(tag) : parentMap__33287.call(null,tag)),parent))
{return cljs.core.reduce.cljs$lang$arity$3((function (p1__33271_SHARP_,p2__33272_SHARP_){
return cljs.core.apply.cljs$lang$arity$3(cljs.core.derive,p1__33271_SHARP_,p2__33272_SHARP_);
}),cljs.core.make_hierarchy(),cljs.core.partition.cljs$lang$arity$2(2,deriv_seq__33290));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$lang$arity$2(method_cache,(function (_){
return cljs.core.deref(method_table);
}));
return cljs.core.swap_BANG_.cljs$lang$arity$2(cached_hierarchy,(function (_){
return cljs.core.deref(hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__33298 = cljs.core.deref(prefer_table).call(null,x);
var or__3939__auto____33300 = (cljs.core.truth_((function (){var and__3937__auto____33299 = xprefs__33298;
if(cljs.core.truth_(and__3937__auto____33299))
{return (xprefs__33298.cljs$lang$arity$1 ? xprefs__33298.cljs$lang$arity$1(y) : xprefs__33298.call(null,y));
} else
{return and__3937__auto____33299;
}
})())?true:null);
if(cljs.core.truth_(or__3939__auto____33300))
{return or__3939__auto____33300;
} else
{var or__3939__auto____33302 = (function (){var ps__33301 = cljs.core.parents.cljs$lang$arity$1(y);
while(true){
if((cljs.core.count(ps__33301) > 0))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps__33301),prefer_table)))
{} else
{}
{
var G__33305 = cljs.core.rest(ps__33301);
ps__33301 = G__33305;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3939__auto____33302))
{return or__3939__auto____33302;
} else
{var or__3939__auto____33304 = (function (){var ps__33303 = cljs.core.parents.cljs$lang$arity$1(x);
while(true){
if((cljs.core.count(ps__33303) > 0))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps__33303),y,prefer_table)))
{} else
{}
{
var G__33306 = cljs.core.rest(ps__33303);
ps__33303 = G__33306;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3939__auto____33304))
{return or__3939__auto____33304;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3939__auto____33308 = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3939__auto____33308))
{return or__3939__auto____33308;
} else
{return cljs.core.isa_QMARK_.cljs$lang$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__33326 = cljs.core.reduce.cljs$lang$arity$3((function (be,p__33318){
var vec__33319__33320 = p__33318;
var k__33321 = cljs.core.nth.cljs$lang$arity$3(vec__33319__33320,0,null);
var ___33322 = cljs.core.nth.cljs$lang$arity$3(vec__33319__33320,1,null);
var e__33323 = vec__33319__33320;
if(cljs.core.isa_QMARK_.cljs$lang$arity$2(dispatch_val,k__33321))
{var be2__33325 = (cljs.core.truth_((function (){var or__3939__auto____33324 = (be == null);
if(or__3939__auto____33324)
{return or__3939__auto____33324;
} else
{return cljs.core.dominates(k__33321,cljs.core.first(be),prefer_table);
}
})())?e__33323:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2__33325),k__33321,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__33321),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2__33325)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__33325;
} else
{return be;
}
}),null,cljs.core.deref(method_table));
if(cljs.core.truth_(best_entry__33326))
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(cached_hierarchy),cljs.core.deref(hierarchy)))
{cljs.core.swap_BANG_.cljs$lang$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry__33326));
return cljs.core.second(best_entry__33326);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3937__auto____33331 = mf;
if(and__3937__auto____33331)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3937__auto____33331;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2396__auto____33332 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____33333 = (cljs.core._reset[goog.typeOf(x__2396__auto____33332)]);
if(or__3939__auto____33333)
{return or__3939__auto____33333;
} else
{var or__3939__auto____33334 = (cljs.core._reset["_"]);
if(or__3939__auto____33334)
{return or__3939__auto____33334;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3937__auto____33339 = mf;
if(and__3937__auto____33339)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3937__auto____33339;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2396__auto____33340 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____33341 = (cljs.core._add_method[goog.typeOf(x__2396__auto____33340)]);
if(or__3939__auto____33341)
{return or__3939__auto____33341;
} else
{var or__3939__auto____33342 = (cljs.core._add_method["_"]);
if(or__3939__auto____33342)
{return or__3939__auto____33342;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3937__auto____33347 = mf;
if(and__3937__auto____33347)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3937__auto____33347;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2396__auto____33348 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____33349 = (cljs.core._remove_method[goog.typeOf(x__2396__auto____33348)]);
if(or__3939__auto____33349)
{return or__3939__auto____33349;
} else
{var or__3939__auto____33350 = (cljs.core._remove_method["_"]);
if(or__3939__auto____33350)
{return or__3939__auto____33350;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3937__auto____33355 = mf;
if(and__3937__auto____33355)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3937__auto____33355;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2396__auto____33356 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____33357 = (cljs.core._prefer_method[goog.typeOf(x__2396__auto____33356)]);
if(or__3939__auto____33357)
{return or__3939__auto____33357;
} else
{var or__3939__auto____33358 = (cljs.core._prefer_method["_"]);
if(or__3939__auto____33358)
{return or__3939__auto____33358;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3937__auto____33363 = mf;
if(and__3937__auto____33363)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3937__auto____33363;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2396__auto____33364 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____33365 = (cljs.core._get_method[goog.typeOf(x__2396__auto____33364)]);
if(or__3939__auto____33365)
{return or__3939__auto____33365;
} else
{var or__3939__auto____33366 = (cljs.core._get_method["_"]);
if(or__3939__auto____33366)
{return or__3939__auto____33366;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3937__auto____33371 = mf;
if(and__3937__auto____33371)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3937__auto____33371;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2396__auto____33372 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____33373 = (cljs.core._methods[goog.typeOf(x__2396__auto____33372)]);
if(or__3939__auto____33373)
{return or__3939__auto____33373;
} else
{var or__3939__auto____33374 = (cljs.core._methods["_"]);
if(or__3939__auto____33374)
{return or__3939__auto____33374;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3937__auto____33379 = mf;
if(and__3937__auto____33379)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3937__auto____33379;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2396__auto____33380 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____33381 = (cljs.core._prefers[goog.typeOf(x__2396__auto____33380)]);
if(or__3939__auto____33381)
{return or__3939__auto____33381;
} else
{var or__3939__auto____33382 = (cljs.core._prefers["_"]);
if(or__3939__auto____33382)
{return or__3939__auto____33382;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3937__auto____33387 = mf;
if(and__3937__auto____33387)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3937__auto____33387;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2396__auto____33388 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____33389 = (cljs.core._dispatch[goog.typeOf(x__2396__auto____33388)]);
if(or__3939__auto____33389)
{return or__3939__auto____33389;
} else
{var or__3939__auto____33390 = (cljs.core._dispatch["_"]);
if(or__3939__auto____33390)
{return or__3939__auto____33390;
} else
{throw cljs.core.missing_protocol("IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__33393 = cljs.core.apply.cljs$lang$arity$2(dispatch_fn,args);
var target_fn__33394 = cljs.core._get_method(mf,dispatch_val__33393);
if(cljs.core.truth_(target_fn__33394))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__33393)].join('')));
}
return cljs.core.apply.cljs$lang$arity$2(target_fn__33394,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__33395 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__33396 = this;
cljs.core.swap_BANG_.cljs$lang$arity$2(this__33396.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__33396.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__33396.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__33396.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__33397 = this;
cljs.core.swap_BANG_.cljs$lang$arity$4(this__33397.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(this__33397.method_cache,this__33397.method_table,this__33397.cached_hierarchy,this__33397.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__33398 = this;
cljs.core.swap_BANG_.cljs$lang$arity$3(this__33398.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(this__33398.method_cache,this__33398.method_table,this__33398.cached_hierarchy,this__33398.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__33399 = this;
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(this__33399.cached_hierarchy),cljs.core.deref(this__33399.hierarchy)))
{} else
{cljs.core.reset_cache(this__33399.method_cache,this__33399.method_table,this__33399.cached_hierarchy,this__33399.hierarchy);
}
var temp__4086__auto____33400 = cljs.core.deref(this__33399.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4086__auto____33400))
{var target_fn__33401 = temp__4086__auto____33400;
return target_fn__33401;
} else
{var temp__4086__auto____33402 = cljs.core.find_and_cache_best_method(this__33399.name,dispatch_val,this__33399.hierarchy,this__33399.method_table,this__33399.prefer_table,this__33399.method_cache,this__33399.cached_hierarchy);
if(cljs.core.truth_(temp__4086__auto____33402))
{var target_fn__33403 = temp__4086__auto____33402;
return target_fn__33403;
} else
{return cljs.core.deref(this__33399.method_table).call(null,this__33399.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__33404 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,this__33404.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__33404.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.cljs$lang$arity$2(this__33404.prefer_table,(function (old){
return cljs.core.assoc.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache(this__33404.method_cache,this__33404.method_table,this__33404.cached_hierarchy,this__33404.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__33405 = this;
return cljs.core.deref(this__33405.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__33406 = this;
return cljs.core.deref(this__33406.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__33407 = this;
return cljs.core.do_dispatch(mf,this__33407.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__33409__delegate = function (_,args){
var self__33408 = this;
return cljs.core._dispatch(self__33408,args);
};
var G__33409 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__33409__delegate.call(this, _, args);
};
G__33409.cljs$lang$maxFixedArity = 1;
G__33409.cljs$lang$applyTo = (function (arglist__33410){
var _ = cljs.core.first(arglist__33410);
var args = cljs.core.rest(arglist__33410);
return G__33409__delegate(_, args);
});
G__33409.cljs$lang$arity$variadic = G__33409__delegate;
return G__33409;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__33411 = this;
return cljs.core._dispatch(self__33411,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__33412 = this;
return goog.string.hashCode(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this$], 0)));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_33414,_){
var this__33413 = this;
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#uuid \""),cljs.core.str(this__33413.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__33415 = this;
var and__3937__auto____33416 = cljs.core.instance_QMARK_(cljs.core.UUID,other);
if(and__3937__auto____33416)
{return (this__33415.uuid === other.uuid);
} else
{return and__3937__auto____33416;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__33417 = this;
var this__33418 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__33418], 0));
});
cljs.core.UUID;
