function foo() {
    var a = 2;
    console.log(this.a);
    //this.bar();//不可以得到bar
}

function bar() {
    console.log(this.a);//不能使用this来引用一个词法作用域内部的东西
}
var obj = {
    a: 1
}
foo.call(obj);

let b = 22;
function test() {
    console.log(this.b);
}

test();