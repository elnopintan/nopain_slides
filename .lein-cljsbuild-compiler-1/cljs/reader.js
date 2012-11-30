goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3937__auto____34553 = reader;
if(and__3937__auto____34553)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3937__auto____34553;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__2396__auto____34554 = (((reader == null))?null:reader);
return (function (){var or__3939__auto____34555 = (cljs.reader.read_char[goog.typeOf(x__2396__auto____34554)]);
if(or__3939__auto____34555)
{return or__3939__auto____34555;
} else
{var or__3939__auto____34556 = (cljs.reader.read_char["_"]);
if(or__3939__auto____34556)
{return or__3939__auto____34556;
} else
{throw cljs.core.missing_protocol("PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3937__auto____34561 = reader;
if(and__3937__auto____34561)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3937__auto____34561;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__2396__auto____34562 = (((reader == null))?null:reader);
return (function (){var or__3939__auto____34563 = (cljs.reader.unread[goog.typeOf(x__2396__auto____34562)]);
if(or__3939__auto____34563)
{return or__3939__auto____34563;
} else
{var or__3939__auto____34564 = (cljs.reader.unread["_"]);
if(or__3939__auto____34564)
{return or__3939__auto____34564;
} else
{throw cljs.core.missing_protocol("PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__34565 = this;
if(cljs.core.empty_QMARK_(cljs.core.deref(this__34565.buffer_atom)))
{var idx__34566 = cljs.core.deref(this__34565.index_atom);
cljs.core.swap_BANG_.cljs$lang$arity$2(this__34565.index_atom,cljs.core.inc);
return (this__34565.s[idx__34566]);
} else
{var buf__34567 = cljs.core.deref(this__34565.buffer_atom);
cljs.core.swap_BANG_.cljs$lang$arity$2(this__34565.buffer_atom,cljs.core.rest);
return cljs.core.first(buf__34567);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__34568 = this;
return cljs.core.swap_BANG_.cljs$lang$arity$2(this__34568.buffer_atom,(function (p1__34548_SHARP_){
return cljs.core.cons(ch,p1__34548_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.cljs$lang$arity$1(0),cljs.core.atom.cljs$lang$arity$1(null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3939__auto____34570 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3939__auto____34570))
{return or__3939__auto____34570;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3939__auto____34575 = cljs.reader.numeric_QMARK_(initch);
if(or__3939__auto____34575)
{return or__3939__auto____34575;
} else
{var and__3937__auto____34577 = (function (){var or__3939__auto____34576 = ("+" === initch);
if(or__3939__auto____34576)
{return or__3939__auto____34576;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3937__auto____34577))
{return cljs.reader.numeric_QMARK_((function (){var next_ch__34578 = cljs.reader.read_char(reader);
cljs.reader.unread(reader,next_ch__34578);
return next_ch__34578;
})());
} else
{return and__3937__auto____34577;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.cljs$lang$arity$2(cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__34579){
var rdr = cljs.core.first(arglist__34579);
var msg = cljs.core.rest(arglist__34579);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3937__auto____34583 = !((ch === "#"));
if(and__3937__auto____34583)
{var and__3937__auto____34584 = !((ch === "'"));
if(and__3937__auto____34584)
{var and__3937__auto____34585 = !((ch === ":"));
if(and__3937__auto____34585)
{return cljs.reader.macros(ch);
} else
{return and__3937__auto____34585;
}
} else
{return and__3937__auto____34584;
}
} else
{return and__3937__auto____34583;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__34590 = (new goog.string.StringBuffer(initch));
var ch__34591 = cljs.reader.read_char(rdr);
while(true){
if((function (){var or__3939__auto____34592 = (ch__34591 == null);
if(or__3939__auto____34592)
{return or__3939__auto____34592;
} else
{var or__3939__auto____34593 = cljs.reader.whitespace_QMARK_(ch__34591);
if(or__3939__auto____34593)
{return or__3939__auto____34593;
} else
{return cljs.reader.macro_terminating_QMARK_(ch__34591);
}
}
})())
{cljs.reader.unread(rdr,ch__34591);
return sb__34590.toString();
} else
{{
var G__34594 = (function (){sb__34590.append(ch__34591);
return sb__34590;
})();
var G__34595 = cljs.reader.read_char(rdr);
sb__34590 = G__34594;
ch__34591 = G__34595;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__34599 = cljs.reader.read_char(reader);
if((function (){var or__3939__auto____34600 = (ch__34599 === "n");
if(or__3939__auto____34600)
{return or__3939__auto____34600;
} else
{var or__3939__auto____34601 = (ch__34599 === "r");
if(or__3939__auto____34601)
{return or__3939__auto____34601;
} else
{return (ch__34599 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern("([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__34603 = re.exec(s);
if((matches__34603 == null))
{return null;
} else
{if((matches__34603.length === 1))
{return (matches__34603[0]);
} else
{return matches__34603;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__34611 = cljs.reader.re_find_STAR_(cljs.reader.int_pattern,s);
var group3__34612 = (groups__34611[2]);
if(!((function (){var or__3939__auto____34613 = (group3__34612 == null);
if(or__3939__auto____34613)
{return or__3939__auto____34613;
} else
{return (group3__34612.length < 1);
}
})()))
{return 0;
} else
{var negate__34614 = ((("-" === (groups__34611[1])))?-1:1);
var a__34615 = (cljs.core.truth_((groups__34611[3]))?[(groups__34611[3]),10]:(cljs.core.truth_((groups__34611[4]))?[(groups__34611[4]),16]:(cljs.core.truth_((groups__34611[5]))?[(groups__34611[5]),8]:(cljs.core.truth_((groups__34611[7]))?[(groups__34611[7]),parseInt((groups__34611[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__34616 = (a__34615[0]);
var radix__34617 = (a__34615[1]);
if((n__34616 == null))
{return null;
} else
{return (negate__34614 * parseInt(n__34616,radix__34617));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__34621 = cljs.reader.re_find_STAR_(cljs.reader.ratio_pattern,s);
var numinator__34622 = (groups__34621[1]);
var denominator__34623 = (groups__34621[2]);
return (parseInt(numinator__34622) / parseInt(denominator__34623));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__34626 = re.exec(s);
if((function (){var and__3937__auto____34627 = !((matches__34626 == null));
if(and__3937__auto____34627)
{return ((matches__34626[0]) === s);
} else
{return and__3937__auto____34627;
}
})())
{if((matches__34626.length === 1))
{return (matches__34626[0]);
} else
{return matches__34626;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.int_pattern,s)))
{return cljs.reader.match_int(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio(s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_(cljs.reader.float_pattern,s)))
{return cljs.reader.match_float(s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader),cljs.reader.read_char(reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern("[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern("[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches(unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",escape_char,unicode_str], 0));
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__34629 = parseInt(code_str,16);
return String.fromCharCode(code__34629);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__34632 = cljs.reader.read_char(reader);
var mapresult__34633 = cljs.reader.escape_char_map(ch__34632);
if(cljs.core.truth_(mapresult__34633))
{return mapresult__34633;
} else
{if((ch__34632 === "x"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_2_pattern,reader,ch__34632,cljs.reader.read_2_chars(reader)));
} else
{if((ch__34632 === "u"))
{return cljs.reader.make_unicode_char(cljs.reader.validate_unicode_escape(cljs.reader.unicode_4_pattern,reader,ch__34632,cljs.reader.read_4_chars(reader)));
} else
{if(cljs.reader.numeric_QMARK_(ch__34632))
{return String.fromCharCode(ch__34632);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["Unexpected unicode escape \\",ch__34632], 0));
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__34635 = cljs.reader.read_char(rdr);
while(true){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(ch__34635) : pred.call(null,ch__34635))))
{{
var G__34636 = cljs.reader.read_char(rdr);
ch__34635 = G__34636;
continue;
}
} else
{return ch__34635;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__34643 = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var ch__34644 = cljs.reader.read_past(cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__34644))
{} else
{cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["EOF"], 0));
}
if((delim === ch__34644))
{return cljs.core.persistent_BANG_(a__34643);
} else
{var temp__4086__auto____34645 = cljs.reader.macros(ch__34644);
if(cljs.core.truth_(temp__4086__auto____34645))
{var macrofn__34646 = temp__4086__auto____34645;
var mret__34647 = (macrofn__34646.cljs$lang$arity$2 ? macrofn__34646.cljs$lang$arity$2(rdr,ch__34644) : macrofn__34646.call(null,rdr,ch__34644));
{
var G__34649 = (((mret__34647 === rdr))?a__34643:cljs.core.conj_BANG_(a__34643,mret__34647));
a__34643 = G__34649;
continue;
}
} else
{cljs.reader.unread(rdr,ch__34644);
var o__34648 = cljs.reader.read(rdr,true,null,recursive_QMARK_);
{
var G__34650 = (((o__34648 === rdr))?a__34643:cljs.core.conj_BANG_(a__34643,o__34648));
a__34643 = G__34650;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Reader for ",ch," not implemented yet"], 0));
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__34655 = cljs.reader.read_char(rdr);
var dm__34656 = cljs.reader.dispatch_macros(ch__34655);
if(cljs.core.truth_(dm__34656))
{return (dm__34656.cljs$lang$arity$2 ? dm__34656.cljs$lang$arity$2(rdr,_) : dm__34656.call(null,rdr,_));
} else
{var temp__4086__auto____34657 = cljs.reader.maybe_read_tagged_type(rdr,ch__34655);
if(cljs.core.truth_(temp__4086__auto____34657))
{var obj__34658 = temp__4086__auto____34657;
return obj__34658;
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["No dispatch macro for ",ch__34655], 0));
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Unmached delimiter ",ch], 0));
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.list,cljs.reader.read_delimited_list(")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list("]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__34660 = cljs.reader.read_delimited_list("}",rdr,true);
if(cljs.core.odd_QMARK_(cljs.core.count(l__34660)))
{cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Map literal must contain an even number of forms"], 0));
} else
{}
return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,l__34660);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__34667 = (new goog.string.StringBuffer(initch));
var ch__34668 = cljs.reader.read_char(reader);
while(true){
if(cljs.core.truth_((function (){var or__3939__auto____34669 = (ch__34668 == null);
if(or__3939__auto____34669)
{return or__3939__auto____34669;
} else
{var or__3939__auto____34670 = cljs.reader.whitespace_QMARK_(ch__34668);
if(or__3939__auto____34670)
{return or__3939__auto____34670;
} else
{return cljs.reader.macros(ch__34668);
}
}
})()))
{cljs.reader.unread(reader,ch__34668);
var s__34671 = buffer__34667.toString();
var or__3939__auto____34672 = cljs.reader.match_number(s__34671);
if(cljs.core.truth_(or__3939__auto____34672))
{return or__3939__auto____34672;
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["Invalid number format [",s__34671,"]"], 0));
}
} else
{{
var G__34673 = (function (){buffer__34667.append(ch__34668);
return buffer__34667;
})();
var G__34674 = cljs.reader.read_char(reader);
buffer__34667 = G__34673;
ch__34668 = G__34674;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__34677 = (new goog.string.StringBuffer());
var ch__34678 = cljs.reader.read_char(reader);
while(true){
if((ch__34678 == null))
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["EOF while reading string"], 0));
} else
{if(("\\" === ch__34678))
{{
var G__34679 = (function (){buffer__34677.append(cljs.reader.escape_char(buffer__34677,reader));
return buffer__34677;
})();
var G__34680 = cljs.reader.read_char(reader);
buffer__34677 = G__34679;
ch__34678 = G__34680;
continue;
}
} else
{if(("\"" === ch__34678))
{return buffer__34677.toString();
} else
{if("\uFDD0'default")
{{
var G__34681 = (function (){buffer__34677.append(ch__34678);
return buffer__34677;
})();
var G__34682 = cljs.reader.read_char(reader);
buffer__34677 = G__34681;
ch__34678 = G__34682;
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
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
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
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__34684 = cljs.reader.read_token(reader,initch);
if(cljs.core.truth_(goog.string.contains(token__34684,"/")))
{return cljs.core.symbol.cljs$lang$arity$2(cljs.core.subs.cljs$lang$arity$3(token__34684,0,token__34684.indexOf("/")),cljs.core.subs.cljs$lang$arity$3(token__34684,(token__34684.indexOf("/") + 1),token__34684.length));
} else
{return cljs.reader.special_symbols(token__34684,cljs.core.symbol.cljs$lang$arity$1(token__34684));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__34694 = cljs.reader.read_token(reader,cljs.reader.read_char(reader));
var a__34695 = cljs.reader.re_matches_STAR_(cljs.reader.symbol_pattern,token__34694);
var token__34696 = (a__34695[0]);
var ns__34697 = (a__34695[1]);
var name__34698 = (a__34695[2]);
if(cljs.core.truth_((function (){var or__3939__auto____34700 = (function (){var and__3937__auto____34699 = !((void 0 === ns__34697));
if(and__3937__auto____34699)
{return (ns__34697.substring((ns__34697.length - 2),ns__34697.length) === ":/");
} else
{return and__3937__auto____34699;
}
})();
if(cljs.core.truth_(or__3939__auto____34700))
{return or__3939__auto____34700;
} else
{var or__3939__auto____34701 = ((name__34698[(name__34698.length - 1)]) === ":");
if(or__3939__auto____34701)
{return or__3939__auto____34701;
} else
{return !((token__34696.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["Invalid token: ",token__34696], 0));
} else
{if((function (){var and__3937__auto____34702 = !((ns__34697 == null));
if(and__3937__auto____34702)
{return (ns__34697.length > 0);
} else
{return and__3937__auto____34702;
}
})())
{return cljs.core.keyword.cljs$lang$arity$2(ns__34697.substring(0,ns__34697.indexOf("/")),name__34698);
} else
{return cljs.core.keyword.cljs$lang$arity$1(token__34696);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_(f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_(f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_(f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.cljs$lang$arity$2(sym,cljs.reader.read(rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq([msg], 0));
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__34708 = cljs.reader.desugar_meta(cljs.reader.read(rdr,true,null,true));
if(cljs.core.map_QMARK_(m__34708))
{} else
{cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Metadata must be Symbol,Keyword,String or Map"], 0));
}
var o__34709 = cljs.reader.read(rdr,true,null,true);
if((function (){var G__34710__34711 = o__34709;
if(G__34710__34711)
{if((function (){var or__3939__auto____34712 = (G__34710__34711.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3939__auto____34712)
{return or__3939__auto____34712;
} else
{return G__34710__34711.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__34710__34711.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IWithMeta,G__34710__34711);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IWithMeta,G__34710__34711);
}
})())
{return cljs.core.with_meta(o__34709,cljs.core.merge.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.meta(o__34709),m__34708], 0)));
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Metadata can only be applied to IWithMetas"], 0));
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set(cljs.reader.read_delimited_list("}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern(cljs.reader.read_string_STAR_(rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read(rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader("\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader("\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader("Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__34716 = cljs.reader.read_char(reader);
if((ch__34716 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.cljs$lang$arity$variadic(reader,cljs.core.array_seq(["EOF"], 0));
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_(ch__34716))
{{
var G__34719 = reader;
var G__34720 = eof_is_error;
var G__34721 = sentinel;
var G__34722 = is_recursive;
reader = G__34719;
eof_is_error = G__34720;
sentinel = G__34721;
is_recursive = G__34722;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_(ch__34716))
{{
var G__34723 = (cljs.reader.read_comment.cljs$lang$arity$2 ? cljs.reader.read_comment.cljs$lang$arity$2(reader,ch__34716) : cljs.reader.read_comment.call(null,reader,ch__34716));
var G__34724 = eof_is_error;
var G__34725 = sentinel;
var G__34726 = is_recursive;
reader = G__34723;
eof_is_error = G__34724;
sentinel = G__34725;
is_recursive = G__34726;
continue;
}
} else
{if("\uFDD0'else")
{var f__34717 = cljs.reader.macros(ch__34716);
var res__34718 = (cljs.core.truth_(f__34717)?(f__34717.cljs$lang$arity$2 ? f__34717.cljs$lang$arity$2(reader,ch__34716) : f__34717.call(null,reader,ch__34716)):((cljs.reader.number_literal_QMARK_(reader,ch__34716))?cljs.reader.read_number(reader,ch__34716):(("\uFDD0'else")?cljs.reader.read_symbol(reader,ch__34716):null)));
if((res__34718 === reader))
{{
var G__34727 = reader;
var G__34728 = eof_is_error;
var G__34729 = sentinel;
var G__34730 = is_recursive;
reader = G__34727;
eof_is_error = G__34728;
sentinel = G__34729;
is_recursive = G__34730;
continue;
}
} else
{return res__34718;
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
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__34732 = cljs.reader.push_back_reader(s);
return cljs.reader.read(r__34732,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.cljs$lang$arity$2(width,cljs.core.count(s)))
{return s;
} else
{if((width < cljs.core.count(s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__34734 = (new goog.string.StringBuffer(s));
while(true){
if((b__34734.getLength() < width))
{{
var G__34735 = b__34734.append("0");
b__34734 = G__34735;
continue;
}
} else
{return b__34734.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__3937__auto____34738 = cljs.reader.divisible_QMARK_(year,4);
if(cljs.core.truth_(and__3937__auto____34738))
{var or__3939__auto____34739 = cljs.reader.indivisible_QMARK_(year,100);
if(cljs.core.truth_(or__3939__auto____34739))
{return or__3939__auto____34739;
} else
{return cljs.reader.divisible_QMARK_(year,400);
}
} else
{return and__3937__auto____34738;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__34744 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__34745 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.cljs$lang$arity$3((cljs.core.truth_(leap_year_QMARK_)?dim_leap__34745:dim_norm__34744),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__34746 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__34748 = (function (low,n,high,msg){
if((function (){var and__3937__auto____34747 = (low <= n);
if(and__3937__auto____34747)
{return (n <= high);
} else
{return and__3937__auto____34747;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474,"\uFDD0'column",25))], 0)))].join('')));
}
return n;
});
return (function (ts){
var temp__4088__auto____34749 = cljs.core.map.cljs$lang$arity$2(cljs.core.vec,cljs.core.split_at(8,cljs.core.re_matches(timestamp__34746,ts)));
if(cljs.core.truth_(temp__4088__auto____34749))
{var vec__34750__34753 = temp__4088__auto____34749;
var vec__34751__34754 = cljs.core.nth.cljs$lang$arity$3(vec__34750__34753,0,null);
var ___34755 = cljs.core.nth.cljs$lang$arity$3(vec__34751__34754,0,null);
var years__34756 = cljs.core.nth.cljs$lang$arity$3(vec__34751__34754,1,null);
var months__34757 = cljs.core.nth.cljs$lang$arity$3(vec__34751__34754,2,null);
var days__34758 = cljs.core.nth.cljs$lang$arity$3(vec__34751__34754,3,null);
var hours__34759 = cljs.core.nth.cljs$lang$arity$3(vec__34751__34754,4,null);
var minutes__34760 = cljs.core.nth.cljs$lang$arity$3(vec__34751__34754,5,null);
var seconds__34761 = cljs.core.nth.cljs$lang$arity$3(vec__34751__34754,6,null);
var milliseconds__34762 = cljs.core.nth.cljs$lang$arity$3(vec__34751__34754,7,null);
var vec__34752__34763 = cljs.core.nth.cljs$lang$arity$3(vec__34750__34753,1,null);
var ___34764 = cljs.core.nth.cljs$lang$arity$3(vec__34752__34763,0,null);
var ___34765 = cljs.core.nth.cljs$lang$arity$3(vec__34752__34763,1,null);
var ___34766 = cljs.core.nth.cljs$lang$arity$3(vec__34752__34763,2,null);
var V__34767 = vec__34750__34753;
var vec__34768__34771 = cljs.core.map.cljs$lang$arity$2((function (v){
return cljs.core.map.cljs$lang$arity$2((function (p1__34743_SHARP_){
return parseInt(p1__34743_SHARP_,10);
}),v);
}),cljs.core.map.cljs$lang$arity$3((function (p1__34741_SHARP_,p2__34740_SHARP_){
return cljs.core.update_in(p2__34740_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__34741_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly(null),(function (p1__34742_SHARP_){
if(cljs.core._EQ_.cljs$lang$arity$2(p1__34742_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__34767));
var vec__34769__34772 = cljs.core.nth.cljs$lang$arity$3(vec__34768__34771,0,null);
var ___34773 = cljs.core.nth.cljs$lang$arity$3(vec__34769__34772,0,null);
var y__34774 = cljs.core.nth.cljs$lang$arity$3(vec__34769__34772,1,null);
var mo__34775 = cljs.core.nth.cljs$lang$arity$3(vec__34769__34772,2,null);
var d__34776 = cljs.core.nth.cljs$lang$arity$3(vec__34769__34772,3,null);
var h__34777 = cljs.core.nth.cljs$lang$arity$3(vec__34769__34772,4,null);
var m__34778 = cljs.core.nth.cljs$lang$arity$3(vec__34769__34772,5,null);
var s__34779 = cljs.core.nth.cljs$lang$arity$3(vec__34769__34772,6,null);
var ms__34780 = cljs.core.nth.cljs$lang$arity$3(vec__34769__34772,7,null);
var vec__34770__34781 = cljs.core.nth.cljs$lang$arity$3(vec__34768__34771,1,null);
var offset_sign__34782 = cljs.core.nth.cljs$lang$arity$3(vec__34770__34781,0,null);
var offset_hours__34783 = cljs.core.nth.cljs$lang$arity$3(vec__34770__34781,1,null);
var offset_minutes__34784 = cljs.core.nth.cljs$lang$arity$3(vec__34770__34781,2,null);
var offset__34785 = (offset_sign__34782 * ((offset_hours__34783 * 60) + offset_minutes__34784));
return cljs.core.PersistentVector.fromArray([((cljs.core.not(years__34756))?1970:y__34774),((cljs.core.not(months__34757))?1:(check__34748.cljs$lang$arity$4 ? check__34748.cljs$lang$arity$4(1,mo__34775,12,"timestamp month field must be in range 1..12") : check__34748.call(null,1,mo__34775,12,"timestamp month field must be in range 1..12"))),((cljs.core.not(days__34758))?1:(check__34748.cljs$lang$arity$4 ? check__34748.cljs$lang$arity$4(1,d__34776,(cljs.reader.days_in_month.cljs$lang$arity$2 ? cljs.reader.days_in_month.cljs$lang$arity$2(mo__34775,cljs.reader.leap_year_QMARK_(y__34774)) : cljs.reader.days_in_month.call(null,mo__34775,cljs.reader.leap_year_QMARK_(y__34774))),"timestamp day field must be in range 1..last day in month") : check__34748.call(null,1,d__34776,(cljs.reader.days_in_month.cljs$lang$arity$2 ? cljs.reader.days_in_month.cljs$lang$arity$2(mo__34775,cljs.reader.leap_year_QMARK_(y__34774)) : cljs.reader.days_in_month.call(null,mo__34775,cljs.reader.leap_year_QMARK_(y__34774))),"timestamp day field must be in range 1..last day in month"))),((cljs.core.not(hours__34759))?0:(check__34748.cljs$lang$arity$4 ? check__34748.cljs$lang$arity$4(0,h__34777,23,"timestamp hour field must be in range 0..23") : check__34748.call(null,0,h__34777,23,"timestamp hour field must be in range 0..23"))),((cljs.core.not(minutes__34760))?0:(check__34748.cljs$lang$arity$4 ? check__34748.cljs$lang$arity$4(0,m__34778,59,"timestamp minute field must be in range 0..59") : check__34748.call(null,0,m__34778,59,"timestamp minute field must be in range 0..59"))),((cljs.core.not(seconds__34761))?0:(check__34748.cljs$lang$arity$4 ? check__34748.cljs$lang$arity$4(0,s__34779,((cljs.core._EQ_.cljs$lang$arity$2(m__34778,59))?60:59),"timestamp second field must be in range 0..60") : check__34748.call(null,0,s__34779,((cljs.core._EQ_.cljs$lang$arity$2(m__34778,59))?60:59),"timestamp second field must be in range 0..60"))),((cljs.core.not(milliseconds__34762))?0:(check__34748.cljs$lang$arity$4 ? check__34748.cljs$lang$arity$4(0,ms__34780,999,"timestamp millisecond field must be in range 0..999") : check__34748.call(null,0,ms__34780,999,"timestamp millisecond field must be in range 0..999"))),offset__34785], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4086__auto____34797 = (cljs.reader.parse_and_validate_timestamp.cljs$lang$arity$1 ? cljs.reader.parse_and_validate_timestamp.cljs$lang$arity$1(ts) : cljs.reader.parse_and_validate_timestamp.call(null,ts));
if(cljs.core.truth_(temp__4086__auto____34797))
{var vec__34798__34799 = temp__4086__auto____34797;
var years__34800 = cljs.core.nth.cljs$lang$arity$3(vec__34798__34799,0,null);
var months__34801 = cljs.core.nth.cljs$lang$arity$3(vec__34798__34799,1,null);
var days__34802 = cljs.core.nth.cljs$lang$arity$3(vec__34798__34799,2,null);
var hours__34803 = cljs.core.nth.cljs$lang$arity$3(vec__34798__34799,3,null);
var minutes__34804 = cljs.core.nth.cljs$lang$arity$3(vec__34798__34799,4,null);
var seconds__34805 = cljs.core.nth.cljs$lang$arity$3(vec__34798__34799,5,null);
var ms__34806 = cljs.core.nth.cljs$lang$arity$3(vec__34798__34799,6,null);
var offset__34807 = cljs.core.nth.cljs$lang$arity$3(vec__34798__34799,7,null);
return (new Date((Date.UTC(years__34800,(months__34801 - 1),days__34802,hours__34803,minutes__34804,seconds__34805,ms__34806) - ((offset__34807 * 60) * 1000))));
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(null,cljs.core.array_seq([[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join('')], 0));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_(s))
{return cljs.reader.parse_timestamp(s);
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(null,cljs.core.array_seq(["Instance literal expects a string for its timestamp."], 0));
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_(elems))
{return cljs.core.into(cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(null,cljs.core.array_seq(["Queue literal expects a vector for its elements."], 0));
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_(uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(null,cljs.core.array_seq(["UUID literal expects a string as its representation."], 0));
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__34811 = cljs.reader.read_symbol(rdr,initch);
var temp__4086__auto____34812 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.name(tag__34811),null);
if(cljs.core.truth_(temp__4086__auto____34812))
{var pfn__34813 = temp__4086__auto____34812;
return (pfn__34813.cljs$lang$arity$1 ? pfn__34813.cljs$lang$arity$1(cljs.reader.read(rdr,true,null,false)) : pfn__34813.call(null,cljs.reader.read(rdr,true,null,false)));
} else
{return cljs.reader.reader_error.cljs$lang$arity$variadic(rdr,cljs.core.array_seq(["Could not find tag parser for ",cljs.core.name(tag__34811)," in ",cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.keys(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_))], 0))], 0));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__34816 = cljs.core.name(tag);
var old_parser__34817 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag__34816,null);
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__34816,f);
return old_parser__34817;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__34820 = cljs.core.name(tag);
var old_parser__34821 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag__34820,null);
cljs.core.swap_BANG_.cljs$lang$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__34820);
return old_parser__34821;
});
