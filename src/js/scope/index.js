/**
 * 状态， 作用域
 * 1.1 编译原理：
 * 传统的编译语言是提前编译的，
 * 三个步骤：
 *  1 分词、词法分析 
 *  2 解析、语法分析
 *  3 代码生成
 * 
 * 
 * Javascript的编译过程不是发生在构建之前，而是发生在代码执行前的几微秒
 */
function foo(a) {
    var b = a * 2;

    function bar(c) {
        console.log(a, b, c);
    }

    bar(b * 3);
}

foo(2);