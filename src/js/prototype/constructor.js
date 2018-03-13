function Foo() {
    /**
     * 
     */
}

Foo.prototype = {/***/}//创建一个新对象替换了函数默认的.prototype对象引用，                        

var a1 = new Foo();

a1.constructor === Foo;//false  新对象并不会自动获取.constructor属性
a1.constructor === Object;//true

/**
 * 
 * a1并没有constructor属性，所以它委托prototype链上的Foo.prototype
 */