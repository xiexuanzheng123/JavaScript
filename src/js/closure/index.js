function foo() {
    var a = 2;

    function bar() {
        console.log(a);
    }

    return bar;//闭包
}
var baz = foo();//在foo执行后，通常会期待foo的整个内部作用域被摧毁，因为引擎有垃圾回收功能
                //而闭包则会组织回收内部作用域，这里foo执行之后，内部作用域会一直存在，因为bar
                //在使用，使用该作用域能够一直存活，以供bar在之后任何时间引用，这个引用就叫闭包
baz();