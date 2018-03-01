function baz() {
    console.log('baz');//当前调用栈是baz，因此当前调用位置在全局作用域中
    bar();
}
function bar() {
    console.log('bar');//当前调用栈是baz -> bar，当前调用位置在baz中
    foo();
}
function foo() {
    console.log('foo');//当前调用栈是baz -> bar -> foo，当前调用位置在bar中
}
baz();