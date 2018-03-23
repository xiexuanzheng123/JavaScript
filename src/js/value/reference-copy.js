var a = 2;
var b = a;
b++;
a;//2
b;//3

/**
 * 简单值是通过值复制的方式来赋值传递
 * 复合值和函数是通过引用复制的方式来传递
 */
var c = [1, 2, 3];
var d = c;
d.push(4);
c;//[1, 2, 3, 4]
d;//[1, 2, 3, 4]

function foo(x) {
    x = x + 1;
    return x;
}
var a = 2;
var b = foo(a);
