/**
 * 寻找对象a委托的对象，检查一个实例的继承祖先被称为内省
 */
function Foo() {
    //....
}
Foo.prototype.blah = '';
var a = new Foo();

/**
 * 找出委托关系，有两种方法：
 * 1 站在类的角度
 * a instanceof Foo
 * instanceof 回答的问题是：在a的整条原型链上是否有指向Foo.prototype对象
 */