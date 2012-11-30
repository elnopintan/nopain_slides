goog.provide('nopain.execs');
goog.require('cljs.core');
nopain.execs.exec = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
nopain.execs.add_f = (function add_f(n,f,s){
return cljs.core.swap_BANG_.cljs$lang$arity$4(nopain.execs.exec,cljs.core.assoc,n,cljs.core.PersistentVector.fromArray([f,s], true));
});
nopain.execs.run = (function run(n){
var vec__29451__29452 = (n.cljs$lang$arity$1 ? n.cljs$lang$arity$1(cljs.core.deref(nopain.execs.exec)) : n.call(null,cljs.core.deref(nopain.execs.exec)));
var f__29453 = cljs.core.nth.cljs$lang$arity$3(vec__29451__29452,0,null);
var ___29454 = cljs.core.nth.cljs$lang$arity$3(vec__29451__29452,1,null);
return (f__29453.cljs$lang$arity$0 ? f__29453.cljs$lang$arity$0() : f__29453.call(null));
});
nopain.execs.stop = (function stop(n){
var vec__29459__29460 = (n.cljs$lang$arity$1 ? n.cljs$lang$arity$1(cljs.core.deref(nopain.execs.exec)) : n.call(null,cljs.core.deref(nopain.execs.exec)));
var ___29461 = cljs.core.nth.cljs$lang$arity$3(vec__29459__29460,0,null);
var s__29462 = cljs.core.nth.cljs$lang$arity$3(vec__29459__29460,1,null);
return (s__29462.cljs$lang$arity$0 ? s__29462.cljs$lang$arity$0() : s__29462.call(null));
});
