/**
 * class语法无法定义类成员属性，如果为了跟踪实例之间的共享状态必须要这么做，那么只能使用丑陋的prototype语法了
 * 
 */

class C {
    constructor() {
        //确保修改的是共享状态而不是在实例上创建的一个屏蔽属性
        C.prototype.count++;

        //this.count可以通过委托实现我们想要的功能
        console.log("Hello: " + this.count);
    }
}
C.prototype.count = 0;
var c1 = new C();
var c2 = new C();

c1.count === 2;
c1.count === c2.count;

/**
 * 这种方法最大的败笔就是在实现中暴露了.prototype
 */

