/**
 * 屏蔽的概念
 * 
 * 如果foo不直接存在于myObject中而是存在于原型链上,执行myObject.foo = 'bar'的时候,会出现三种情况：
 * 
 * 1、 [[prototype]]链上层存在名为foo的普通数据访问属性，并且writable没有标记为false，
 *    那就会直接在myObject上添加一个名为foo的新属性，它是屏蔽属性
 * 
 * 2、 [[prototype]]上层存在foo，但是被标记成writable：false，那么无法修改已有属性或者在myObject上创建屏蔽属性，
 *     如果运行在严格模式下会报错，否则会忽略
 * 
 * 3、 [[prototype]]上层存在foo，并且它是一个setter，那么会调用这个setter，foo不会被添加到myObject上，
 *      也不会重新定义foo这个setter
 */

 var anotherObject = {
     a: 2
 };

 var myObject = Object.create(anotherObject);

anotherObject.a;//2
myObject.a;//2

anotherObject.hasOwnProperty('a');//true
myObject.hasOwnProperty('a');//false

myObject.a++;//隐式屏蔽
/**
 * 使用委托，查找并增加anotherObject.a属性，
 */

anotherObject.a;//2
myObject.a;//3

myObject.hasOwnProperty('a');//true