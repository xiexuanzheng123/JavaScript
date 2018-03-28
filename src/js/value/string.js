/**
 * String 和 toString 的区别:
 * toString无法转换null和undefined
 */

var a = 123;
var b = true;
var c;
var d = null;
a.toString();//'123'
b.toString();//'true'
c.toString();//typeError
d.toString();//typeError