/**
 * javascript模拟类的复制行为，这个方法就是混入，分为两种方式：
 * 1 显式
 * 2 隐式
 */

function  mixin(sourceObj, targetObj) {
    for(var key in sourceObj) {
        if(!(key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
} 

var Vehicle = {
    engines: 1,
    ignition: function() {
        console.log('Turning on my enginee.');
    },
    drive: function() {
        this.ignition();
        console.log('Steering and moving forward !');
    }
};
/**
 * 函数复制的是引用，而属性直接复印了值
 */
var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function() {
        Vehicle.drive.call(this);
        console.log(
            "Rolling on all " + this.wheels + ' wheels !'
        );
    }
});
