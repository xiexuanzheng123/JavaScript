for(let i=1; i<=5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}
/**
 * 输出五个6
 * 延迟 函数的回调会在循环结束时才执行
 */


for(var i=1; i<=5; i++) {
    (function(j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);
}