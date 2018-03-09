function Foo() {
    console.log('123');
}

var a = new Foo();

console.log(a);

console.log(Object.getPrototypeOf(a) === Foo.prototype);