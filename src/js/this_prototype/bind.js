
/**
 * 
 * 由于硬绑定是一种非常常用的模式，所以在ES5中提供了内置的方法 
 * Function.prototype.bind
 *  
 */
function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = foo.bind(obj);//内置方法bind
var b = bar(3);
console.log(b);

function foo1(el) {
    console.log(el, this.id);
}
var obj1 = {
    id: "awe"
};
[1, 2, 3].forEach(foo1, obj1);
//提供了一个可选的参数，称为上下文（context），其作用和bind一样，
//确保回调函数中使用指定的this