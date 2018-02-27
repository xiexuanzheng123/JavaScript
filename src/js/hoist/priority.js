foo();//函数优先级更高
var foo;
function foo() {
    console.log(1);
}
foo = function() {
    console.log(2);
}