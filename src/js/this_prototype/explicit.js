// function foo() {
//     console.log(this.a, 111);
// }

// var obj = {
//     a: 2
// };

// //无论如何调用函数bar，它总会手动在obj上调用foo，所以称之为硬绑定
// var bar = function() {
//     foo.call(obj);//调用foo的时候强制把它的this绑定到obj上
// }
// bar();//2

// setTimeout(bar, 100);//2

// bar.call(window);//2 硬绑定的bar


// /**
//  * 包裹函数
//  */
// function foo1(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }
// var obj1 = {
//     a: 2
// };
// var bar1 = function() {
//     return foo1.apply(obj1, arguments);
// }
// var b = bar1(3);
// console.log(b);
/**
 * 辅助函数
 */

 function foo(something) {
     console.log(this.a, something);
     return this.a + something;
 }

 function bind(fn, obj) {
     return function() {
         return fn.apply(obj, arguments);
     };
 }

 var obj = {
     a: 2
 };

 var bar = bind(foo, obj);
 var b = bar(3);
 console.log(b);