function foo() {
    console.log(this.a);
}

function doFoo(fn) {
    fn();
}

var obj = {
    a: 2,
    foo: foo
};

var a = "oop, global";

doFoo(obj.foo);//oop, global参数传递就是一种隐式赋值，