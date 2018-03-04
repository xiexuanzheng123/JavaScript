var myObject = {};

Object.defineProperty(
    myObject,
    "a",
    {
        enumerable: true,
        value: 2
    }
);

Object.defineProperty(
    myObject,
    "b",
    {
        enumerable: false,
        value: 3
    }
);

console.log(myObject.b);//3

console.log("b" in myObject);//true

console.log(myObject.hasOwnProperty("b"));//true
/**
 * 只是不能出现在for。。。in操作符中（对象属性的遍历中）
 * 但是可以访问，可以使用in操作符，可以使用hasOwnproperty
 */