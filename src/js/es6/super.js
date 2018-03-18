// class P {
//     foo() {
//         console.log("P.foo");
//     }
// }
// class C extends P {
//     foo() {
//         super();
//     }
// }

// var c1 = new C();
// c1.foo();

var D = {
    foo: function() {
        console.log("D.foo");
    }
};

var E = {
    //foo: C.prototype.foo
};

Object.setPrototypeOf(E, D);//E委托了D
E.foo();