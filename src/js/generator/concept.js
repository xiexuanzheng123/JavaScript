var x = 1;
function *foo() {
    x++;
    yield;
    //console.log("x: " + x);
}

function bar() {
    x++;
}
var it = foo();
it.next();
console.log("x1: ", x);
bar();
it.next();
console.log("x2: ", x);