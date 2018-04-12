class Foo {
    constructor() {
        console.log("Foo: ", new.target.name);
    }
}

class Bar extends Foo {
    constructor() {
        super();
        console.log("Bar: ", new.target.name);
    }
    baz() {
        console.log("baz: ", new.target);
    }
}

//var a = new Foo();

var b = new Bar();
