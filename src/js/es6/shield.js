/**
 * class语法仍然面临着意外屏蔽的问题
 */

class C {
    constructor(id) {
        this.id = id;//id属性屏蔽了id方法
    }
    id() {
        console.log("ID: " + id);
    }
}

var c1 = new C("c1");
console.log(c1.id);
//c1.id();//typeError：not a function 