function foo(a) {
    console.log(a + b);//在函数内无法找到b，则可以在上一级中找到
}
var b = 2;
foo(2); //4