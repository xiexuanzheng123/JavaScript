/**
 * with通常被当做重复引用同一个对象中的多个属性，可以不用重复引用对象本身
 * 
 * 严格模式下不可以使用with
 */

var obj = {
    a: 1,
    b: 2,
    c: 3
};
with(obj) {
    a = 3;
    b = 4;
    c = 5;
};

console.log(obj);
