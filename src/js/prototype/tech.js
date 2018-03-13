function Foo(name) {
    this.name = name;
}
Foo.prototype.myName = function() {
    return this.name;
}

var a = new Foo('a');//a和b的内部[[prototype]]都会关联到Foo.prototype上
var b = new Foo('b');

a.myName();
b.myName();