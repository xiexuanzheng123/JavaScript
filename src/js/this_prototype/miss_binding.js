function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};

var bar = obj.foo;//函数别名
var a = 'oop, global';

bar();//oop, global

/**
 * 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，
 * 因此此时的bar其实是一个不带任何修饰的函数调用，所以使用默认绑定
 */