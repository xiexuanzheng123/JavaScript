/**
 * 欺骗作用域会导致性能下降
 */

function foo(str, a) {
    eval(str);//就类似把定义b=3的代码写在这里,如果是严格模式，则无法修改所在的作用域
    console.log(a, b);//1 3
}
var b = 2;
foo('var b = 3;', 1);//1 3

/**
 * javascript还有一些其他方法和eval相似
 * setTimeout
 * setInterval
 */