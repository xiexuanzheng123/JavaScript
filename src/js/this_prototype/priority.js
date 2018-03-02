// function foo() {
//     console.log(this.a);
// }
// var obj1 = {
//     a: 2,
//     foo: foo
// };

// var obj2 = {
//     a: 3,
//     foo: foo
// };

// obj1.foo();//2
// obj2.foo();//3

// obj1.foo.call(obj2);//3
// obj2.foo.call(obj1);//2 显式绑定高于隐式

// function foo(something) {
//     this.a = something;
// }
// var obj1 = {
//     foo: foo
// };
// var obj2 = {};

// obj1.foo(2);//这么调用的话会用obj1增加一个属性
// console.log(obj1.a);//2

// obj1.foo.call(obj2, 3);
// console.log(obj2);//3

// var bar = new obj1.foo(4);
// console.log(obj1.a);//2 new 绑定比隐式更高
// console.log(bar.a);//4

function foo(something) {
    this.a = something;
}
var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);//2

var baz = new bar(3);
console.log(obj1.a);//2
console.log(baz.a);//3
