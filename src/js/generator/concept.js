// var x = 1;
// function *foo() {
//     x++;
//     yield;
//     //console.log("x: " + x);
// }

// function bar() {
//     x++;
// }
// var it = foo();
// it.next();
// console.log("x1: ", x);
// bar();
// it.next();
// console.log("x2: ", x);
/**
 * 我们只是创建了一个迭代器对象 
 */
function *foo(x, y) {
    return x * y;
}

var it = foo(6, 7);
var res = it.next();

console.log(res.value);