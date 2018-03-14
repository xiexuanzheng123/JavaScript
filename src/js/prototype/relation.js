/**
 * 寻找对象a委托的对象，检查一个实例的继承祖先被称为内省
 */
function Foo() {
    //....
}
Foo.prototype.blah = function bar() {};
var a = new Foo();

/**
 * 找出委托关系，有两种方法：
 * 1 站在类的角度
 * a instanceof Foo
 * instanceof 回答的问题是：在a的整条原型链上是否有指向Foo.prototype的对象？
 */

 console.log(Foo.prototype.isPrototypeOf(a));//true

 //isPrototypeOf回答的问题是：在a的整条原型链中是否出现过Foo.prototype

 console.log(Object.getPrototypeOf(a) === Foo.prototype);

 console.log(a.__proto__ === Foo.prototype);//true

 /**
  * __proto__是一个非标准的方法来访问内部prototype属性，并不存在与对象a中，而是存在于内置的Object.prototype中
  */