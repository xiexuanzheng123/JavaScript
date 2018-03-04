var myObject = {};

Object.defineProperty(myObject, 'a', {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
});
delete myObject.a;

console.log(myObject.a);