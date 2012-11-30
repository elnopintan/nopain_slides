goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_string = (function sel_to_string(item){
if(cljs.core.keyword_QMARK_(item))
{return cljs.core.name(item);
} else
{if(cljs.core.string_QMARK_(item))
{return item;
} else
{if(cljs.core.coll_QMARK_(item))
{return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.map.cljs$lang$arity$2((function (p1__34476_SHARP_){
return sel_to_string(p1__34476_SHARP_);
}),item));
} else
{return null;
}
}
}
});
enfocus.enlive.syntax.convert = (function convert(sel){
if(cljs.core.string_QMARK_(sel))
{return sel;
} else
{return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.interpose(" ",cljs.core.map.cljs$lang$arity$2(enfocus.enlive.syntax.sel_to_string,sel)));
}
});
enfocus.enlive.syntax.attr_pairs = (function attr_pairs(op,elms){
var ts__34489 = (function (p__34484){
var vec__34485__34486 = p__34484;
var x__34487 = cljs.core.nth.cljs$lang$arity$3(vec__34485__34486,0,null);
var y__34488 = cljs.core.nth.cljs$lang$arity$3(vec__34485__34486,1,null);
return [cljs.core.str("["),cljs.core.str(cljs.core.name(x__34487)),cljs.core.str(op),cljs.core.str("='"),cljs.core.str(y__34488),cljs.core.str("']")].join('');
});
return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.map.cljs$lang$arity$2(ts__34489,cljs.core.partition.cljs$lang$arity$2(2,elms)));
});
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (elms){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.map.cljs$lang$arity$2((function (p1__34477_SHARP_){
return [cljs.core.str("["),cljs.core.str(cljs.core.name(p1__34477_SHARP_)),cljs.core.str("]")].join('');
}),elms));
};
var attr_QMARK_ = function (var_args){
var elms = null;
if (goog.isDef(var_args)) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_QMARK___delegate.call(this, elms);
};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__34490){
var elms = cljs.core.seq(arglist__34490);;
return attr_QMARK___delegate(elms);
});
attr_QMARK_.cljs$lang$arity$variadic = attr_QMARK___delegate;
return attr_QMARK_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_EQ_ = (function() { 
var attr_EQ___delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs("",elms);
};
var attr_EQ_ = function (var_args){
var elms = null;
if (goog.isDef(var_args)) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_EQ___delegate.call(this, elms);
};
attr_EQ_.cljs$lang$maxFixedArity = 0;
attr_EQ_.cljs$lang$applyTo = (function (arglist__34491){
var elms = cljs.core.seq(arglist__34491);;
return attr_EQ___delegate(elms);
});
attr_EQ_.cljs$lang$arity$variadic = attr_EQ___delegate;
return attr_EQ_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_has = (function() { 
var attr_has__delegate = function (x,vals){
var ts__34493 = (function (y){
return [cljs.core.str("["),cljs.core.str(cljs.core.name(x)),cljs.core.str("~='"),cljs.core.str(y),cljs.core.str("']")].join('');
});
return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.map.cljs$lang$arity$2(ts__34493,vals));
};
var attr_has = function (x,var_args){
var vals = null;
if (goog.isDef(var_args)) {
  vals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return attr_has__delegate.call(this, x, vals);
};
attr_has.cljs$lang$maxFixedArity = 1;
attr_has.cljs$lang$applyTo = (function (arglist__34494){
var x = cljs.core.first(arglist__34494);
var vals = cljs.core.rest(arglist__34494);
return attr_has__delegate(x, vals);
});
attr_has.cljs$lang$arity$variadic = attr_has__delegate;
return attr_has;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_starts = (function() { 
var attr_starts__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs("^",elms);
};
var attr_starts = function (var_args){
var elms = null;
if (goog.isDef(var_args)) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_starts__delegate.call(this, elms);
};
attr_starts.cljs$lang$maxFixedArity = 0;
attr_starts.cljs$lang$applyTo = (function (arglist__34495){
var elms = cljs.core.seq(arglist__34495);;
return attr_starts__delegate(elms);
});
attr_starts.cljs$lang$arity$variadic = attr_starts__delegate;
return attr_starts;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_ends = (function() { 
var attr_ends__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs("$",elms);
};
var attr_ends = function (var_args){
var elms = null;
if (goog.isDef(var_args)) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_ends__delegate.call(this, elms);
};
attr_ends.cljs$lang$maxFixedArity = 0;
attr_ends.cljs$lang$applyTo = (function (arglist__34496){
var elms = cljs.core.seq(arglist__34496);;
return attr_ends__delegate(elms);
});
attr_ends.cljs$lang$arity$variadic = attr_ends__delegate;
return attr_ends;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_contains = (function() { 
var attr_contains__delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs("*",elms);
};
var attr_contains = function (var_args){
var elms = null;
if (goog.isDef(var_args)) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_contains__delegate.call(this, elms);
};
attr_contains.cljs$lang$maxFixedArity = 0;
attr_contains.cljs$lang$applyTo = (function (arglist__34497){
var elms = cljs.core.seq(arglist__34497);;
return attr_contains__delegate(elms);
});
attr_contains.cljs$lang$arity$variadic = attr_contains__delegate;
return attr_contains;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.attr_BAR__EQ_ = (function() { 
var attr_BAR__EQ___delegate = function (elms){
return enfocus.enlive.syntax.attr_pairs("|",elms);
};
var attr_BAR__EQ_ = function (var_args){
var elms = null;
if (goog.isDef(var_args)) {
  elms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_BAR__EQ___delegate.call(this, elms);
};
attr_BAR__EQ_.cljs$lang$maxFixedArity = 0;
attr_BAR__EQ_.cljs$lang$applyTo = (function (arglist__34498){
var elms = cljs.core.seq(arglist__34498);;
return attr_BAR__EQ___delegate(elms);
});
attr_BAR__EQ_.cljs$lang$arity$variadic = attr_BAR__EQ___delegate;
return attr_BAR__EQ_;
})()
;
enfocus.enlive.syntax.nth_op = (function() {
var nth_op = null;
var nth_op__2 = (function (op,x){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str(")")].join('');
});
var nth_op__3 = (function (op,x,y){
return [cljs.core.str(":nth-"),cljs.core.str(op),cljs.core.str("("),cljs.core.str(x),cljs.core.str("n"),cljs.core.str((((y > 0))?"+":null)),cljs.core.str(y)].join('');
});
nth_op = function(op,x,y){
switch(arguments.length){
case 2:
return nth_op__2.call(this,op,x);
case 3:
return nth_op__3.call(this,op,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_op.cljs$lang$arity$2 = nth_op__2;
nth_op.cljs$lang$arity$3 = nth_op__3;
return nth_op;
})()
;
enfocus.enlive.syntax.nth_child = (function() {
var nth_child = null;
var nth_child__1 = (function (x){
return enfocus.enlive.syntax.nth_op.cljs$lang$arity$2("child",x);
});
var nth_child__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.cljs$lang$arity$3("child",x,y);
});
nth_child = function(x,y){
switch(arguments.length){
case 1:
return nth_child__1.call(this,x);
case 2:
return nth_child__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_child.cljs$lang$arity$1 = nth_child__1;
nth_child.cljs$lang$arity$2 = nth_child__2;
return nth_child;
})()
;
enfocus.enlive.syntax.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__1 = (function (x){
return enfocus.enlive.syntax.nth_op.cljs$lang$arity$2("last-child",x);
});
var nth_last_child__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.cljs$lang$arity$3("last-child",x,y);
});
nth_last_child = function(x,y){
switch(arguments.length){
case 1:
return nth_last_child__1.call(this,x);
case 2:
return nth_last_child__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_last_child.cljs$lang$arity$1 = nth_last_child__1;
nth_last_child.cljs$lang$arity$2 = nth_last_child__2;
return nth_last_child;
})()
;
enfocus.enlive.syntax.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__1 = (function (x){
return enfocus.enlive.syntax.nth_op.cljs$lang$arity$2("of-type",x);
});
var nth_of_type__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.cljs$lang$arity$3("of-type",x,y);
});
nth_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_of_type__1.call(this,x);
case 2:
return nth_of_type__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_of_type.cljs$lang$arity$1 = nth_of_type__1;
nth_of_type.cljs$lang$arity$2 = nth_of_type__2;
return nth_of_type;
})()
;
enfocus.enlive.syntax.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__1 = (function (x){
return enfocus.enlive.syntax.nth_op.cljs$lang$arity$2("last-of-type",x);
});
var nth_last_of_type__2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.cljs$lang$arity$3("last-of-type",x,y);
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case 1:
return nth_last_of_type__1.call(this,x);
case 2:
return nth_last_of_type__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
nth_last_of_type.cljs$lang$arity$1 = nth_last_of_type__1;
nth_last_of_type.cljs$lang$arity$2 = nth_last_of_type__2;
return nth_last_of_type;
})()
;
/**
* @param {...*} var_args
*/
enfocus.enlive.syntax.but = (function() { 
var but__delegate = function (sel){
return [cljs.core.str("not("),cljs.core.str(enfocus.enlive.syntax.convert(sel)),cljs.core.str(")")].join('');
};
var but = function (var_args){
var sel = null;
if (goog.isDef(var_args)) {
  sel = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return but__delegate.call(this, sel);
};
but.cljs$lang$maxFixedArity = 0;
but.cljs$lang$applyTo = (function (arglist__34499){
var sel = cljs.core.seq(arglist__34499);;
return but__delegate(sel);
});
but.cljs$lang$arity$variadic = but__delegate;
return but;
})()
;
