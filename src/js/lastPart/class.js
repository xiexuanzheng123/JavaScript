class Foo { //创建一个名为Foo的具名函数
    constructor(a, b) {//指定Foo函数的签名以及 函数整体内容
        this.x = a;
        this.y = b;
    }

    gimmeXY() {
        return this.x * this.y;
    }
}

class Bar extends Foo {
    constructor(a, b, c) {
        super(a, b);//在构造器中，super自动指向“父构造器”, 这里自动指向Foo，
        this.z = c;
    }

    gimmeXY() {
        return super.gimmeXY() * this.z;//super具体指Foo.prototype
    }
}