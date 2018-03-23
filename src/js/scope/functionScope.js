/**
 * 属于这个函数的全部变量都可以在整个函数的范围内使用或复用 
 */

function doSomething(a) {
    b = a + doSomethingElse(a * 2);

    console.log(b * 3);
}
function doSomethingElse(a) {
    return a - 1;
}
var b;

doSomething(2);

// function foo() {
//     function bar(a) {
//         var i = 3;
//         console.log(a + i);
//     }

//     for(let i=0; i<10; i++) {
//         bar(i * 2);
//     }
// }
// foo();

var c = 2;
(function IIFE(global) {
    var c = 3;
    console.log(c);
    console.log(global.c);
})(window);

var d = 2;
(function IIFE(def) {
    def(window);
})(function def(global) {
    var d = 3;
    console.log(d);
    console.log(global.d);
})