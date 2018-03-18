/**
 * ES6优点：
 * 1 不再引用杂乱的.prototype了
 * 2 Button声明时直接继承了Widget，不再需要Object.create来替换prototype对象，也不要设置.__proto__或者Object.setPrototypeOf()
 * 3 可以通过super来实现相对多态，
 * 4 class字面语法不能声明属性，只能声明方法
 * 5 通过extends很自然地扩展对象
 */


/**
 * 陷阱
 * class只是prototype的一种语法糖
 */

 class C {
     constructor() {
         this.num = Math.random();
     }
     rand() {
         console.log("Random: " + this.num);
     }
 }
 var c1 = new C();
 c1.rand();

 C.prototype.rand = function() {
     console.log("Random: " + Math.round(this.num * 1000));
 };
 var c2 = new C();
 c2.rand();

 c1.rand();