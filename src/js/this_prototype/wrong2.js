function foo() {
    var a = 2;
    this.bar();//不可以得到bar
}

function bar() {
    console.log(this.a);//不能使用this来引用一个词法作用域内部的东西
}

foo();