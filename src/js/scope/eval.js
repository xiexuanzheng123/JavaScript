function foo(str, a) {
    eval(str);//就类似把定义b=3的代码写在这里
    console.log(a, b);
}
var b = 2;
foo('var b = 3;', 1);//1 3