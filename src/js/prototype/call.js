function Foo(name) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
}

function Bar(name, label) {
    Foo.call(this.name);
    this.label = label;
}
Bar.prototype = Object.create(Foo.prototype);//创建一个新的Bar.prototype对象并关联到Foo.proptotype上
    //不可以写成Bar.prototype = Foo.prototype
    //Bar.prototype = new Foo();有副作用，要用create

    //ES6的方法是：Object.setPrototypeOf(Bar.prototype, Foo.prototype)

Bar.prototype.myLabel = function() {
    return this.label;
}

var a = new Bar('a', 'obj a');

a.myName();//a
a.myLabel();//