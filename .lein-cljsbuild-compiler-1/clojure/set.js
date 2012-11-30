goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__34824 = cljs.core.apply.cljs$lang$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max__34824,cljs.core.remove((function (p1__34822_SHARP_){
return (max__34824 === p1__34822_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2)))
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__34828__delegate = function (s1,s2,sets){
var bubbled_sets__34827 = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$lang$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$lang$arity$3(cljs.core.into,cljs.core.first(bubbled_sets__34827),cljs.core.rest(bubbled_sets__34827));
};
var G__34828 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34828__delegate.call(this, s1, s2, sets);
};
G__34828.cljs$lang$maxFixedArity = 2;
G__34828.cljs$lang$applyTo = (function (arglist__34829){
var s1 = cljs.core.first(arglist__34829);
var s2 = cljs.core.first(cljs.core.next(arglist__34829));
var sets = cljs.core.rest(cljs.core.next(arglist__34829));
return G__34828__delegate(s1, s2, sets);
});
G__34828.cljs$lang$arity$variadic = G__34828__delegate;
return G__34828;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
return union__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$lang$arity$0 = union__0;
union.cljs$lang$arity$1 = union__1;
union.cljs$lang$arity$2 = union__2;
union.cljs$lang$arity$variadic = union__3.cljs$lang$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1)))
{{
var G__34832 = s2;
var G__34833 = s1;
s1 = G__34832;
s2 = G__34833;
continue;
}
} else
{return cljs.core.reduce.cljs$lang$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item))
{return result;
} else
{return cljs.core.disj.cljs$lang$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__34834__delegate = function (s1,s2,sets){
var bubbled_sets__34831 = clojure.set.bubble_max_key((function (p1__34825_SHARP_){
return (- cljs.core.count(p1__34825_SHARP_));
}),cljs.core.conj.cljs$lang$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$lang$arity$3(intersection,cljs.core.first(bubbled_sets__34831),cljs.core.rest(bubbled_sets__34831));
};
var G__34834 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34834__delegate.call(this, s1, s2, sets);
};
G__34834.cljs$lang$maxFixedArity = 2;
G__34834.cljs$lang$applyTo = (function (arglist__34835){
var s1 = cljs.core.first(arglist__34835);
var s2 = cljs.core.first(cljs.core.next(arglist__34835));
var sets = cljs.core.rest(cljs.core.next(arglist__34835));
return G__34834__delegate(s1, s2, sets);
});
G__34834.cljs$lang$arity$variadic = G__34834__delegate;
return G__34834;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
return intersection__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$lang$arity$1 = intersection__1;
intersection.cljs$lang$arity$2 = intersection__2;
intersection.cljs$lang$arity$variadic = intersection__3.cljs$lang$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2)))
{return cljs.core.reduce.cljs$lang$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item))
{return cljs.core.disj.cljs$lang$arity$2(result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__34836__delegate = function (s1,s2,sets){
return cljs.core.reduce.cljs$lang$arity$3(difference,s1,cljs.core.conj.cljs$lang$arity$2(sets,s2));
};
var G__34836 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__34836__delegate.call(this, s1, s2, sets);
};
G__34836.cljs$lang$maxFixedArity = 2;
G__34836.cljs$lang$applyTo = (function (arglist__34837){
var s1 = cljs.core.first(arglist__34837);
var s2 = cljs.core.first(cljs.core.next(arglist__34837));
var sets = cljs.core.rest(cljs.core.next(arglist__34837));
return G__34836__delegate(s1, s2, sets);
});
G__34836.cljs$lang$arity$variadic = G__34836__delegate;
return G__34836;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
return difference__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$lang$arity$1 = difference__1;
difference.cljs$lang$arity$2 = difference__2;
difference.cljs$lang$arity$variadic = difference__3.cljs$lang$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.cljs$lang$arity$3((function (s,k){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(k) : pred.call(null,k))))
{return s;
} else
{return cljs.core.disj.cljs$lang$arity$2(s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set(cljs.core.map.cljs$lang$arity$2((function (p1__34838_SHARP_){
return cljs.core.select_keys(p1__34838_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.cljs$lang$arity$3((function (m,p__34846){
var vec__34847__34848 = p__34846;
var old__34849 = cljs.core.nth.cljs$lang$arity$3(vec__34847__34848,0,null);
var new__34850 = cljs.core.nth.cljs$lang$arity$3(vec__34847__34848,1,null);
if((function (){var and__3937__auto____34851 = cljs.core.not_EQ_.cljs$lang$arity$2(old__34849,new__34850);
if(and__3937__auto____34851)
{return cljs.core.contains_QMARK_(m,old__34849);
} else
{return and__3937__auto____34851;
}
})())
{return cljs.core.dissoc.cljs$lang$arity$2(cljs.core.assoc.cljs$lang$arity$3(m,new__34850,cljs.core._lookup.cljs$lang$arity$3(m,old__34849,null)),old__34849);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set(cljs.core.map.cljs$lang$arity$2((function (p1__34839_SHARP_){
return clojure.set.rename_keys(p1__34839_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.cljs$lang$arity$3((function (m,x){
var ik__34853 = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$lang$arity$3(m,ik__34853,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(m,ik__34853,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.cljs$lang$arity$3((function (m,p__34863){
var vec__34864__34865 = p__34863;
var k__34866 = cljs.core.nth.cljs$lang$arity$3(vec__34864__34865,0,null);
var v__34867 = cljs.core.nth.cljs$lang$arity$3(vec__34864__34865,1,null);
return cljs.core.assoc.cljs$lang$arity$3(m,v__34867,k__34866);
}),cljs.core.ObjMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if((function (){var and__3937__auto____34884 = cljs.core.seq(xrel);
if(and__3937__auto____34884)
{return cljs.core.seq(yrel);
} else
{return and__3937__auto____34884;
}
})())
{var ks__34886 = clojure.set.intersection.cljs$lang$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
var vec__34885__34887 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel], true):cljs.core.PersistentVector.fromArray([yrel,xrel], true));
var r__34888 = cljs.core.nth.cljs$lang$arity$3(vec__34885__34887,0,null);
var s__34889 = cljs.core.nth.cljs$lang$arity$3(vec__34885__34887,1,null);
var idx__34890 = clojure.set.index(r__34888,ks__34886);
return cljs.core.reduce.cljs$lang$arity$3((function (ret,x){
var found__34891 = (idx__34890.cljs$lang$arity$1 ? idx__34890.cljs$lang$arity$1(cljs.core.select_keys(x,ks__34886)) : idx__34890.call(null,cljs.core.select_keys(x,ks__34886)));
if(cljs.core.truth_(found__34891))
{return cljs.core.reduce.cljs$lang$arity$3((function (p1__34854_SHARP_,p2__34855_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__34854_SHARP_,cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([p2__34855_SHARP_,x], 0)));
}),ret,found__34891);
} else
{return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,s__34889);
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){
var vec__34892__34893 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert(km)], true):cljs.core.PersistentVector.fromArray([yrel,xrel,km], true));
var r__34894 = cljs.core.nth.cljs$lang$arity$3(vec__34892__34893,0,null);
var s__34895 = cljs.core.nth.cljs$lang$arity$3(vec__34892__34893,1,null);
var k__34896 = cljs.core.nth.cljs$lang$arity$3(vec__34892__34893,2,null);
var idx__34897 = clojure.set.index(r__34894,cljs.core.vals(k__34896));
return cljs.core.reduce.cljs$lang$arity$3((function (ret,x){
var found__34898 = (idx__34897.cljs$lang$arity$1 ? idx__34897.cljs$lang$arity$1(clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k__34896)),k__34896)) : idx__34897.call(null,clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k__34896)),k__34896)));
if(cljs.core.truth_(found__34898))
{return cljs.core.reduce.cljs$lang$arity$3((function (p1__34856_SHARP_,p2__34857_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__34856_SHARP_,cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([p2__34857_SHARP_,x], 0)));
}),ret,found__34898);
} else
{return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,s__34895);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$2 = join__2;
join.cljs$lang$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__3937__auto____34901 = (cljs.core.count(set1) <= cljs.core.count(set2));
if(and__3937__auto____34901)
{return cljs.core.every_QMARK_((function (p1__34868_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__34868_SHARP_);
}),set1);
} else
{return and__3937__auto____34901;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3937__auto____34903 = (cljs.core.count(set1) >= cljs.core.count(set2));
if(and__3937__auto____34903)
{return cljs.core.every_QMARK_((function (p1__34899_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__34899_SHARP_);
}),set2);
} else
{return and__3937__auto____34903;
}
});
