function foo(a) {
    this.a = a;
}
var bar = new foo(2);
console.log(bar.a);
console.log(bar);
/**
 * 1 创建一个全新的对象
 * 2 这个对象会被执行[[原型]]链接
 * 3 这个新对象会绑定到函数调用的this
 * 4 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象
 */