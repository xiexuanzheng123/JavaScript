var fn;

function foo() {
    var a = 2;

    function baz() {
        console.log(a);
    }

    fn = baz;
}

function bar() {
    fn();//这里也是闭包
}

foo();

bar();