/**
 * 
 * 块作用域
 * 1 for
 * 2 if
 * 3 with
 * 4 try/catch
 * catch 会创建一个块作用域,其中声明的变量仅在catch中有效
 */
function process(data) {
    //
}

//写在块内，执行完成之后就会销毁大的数据结构
{
    let someReallyBigData = {};
    process(someReallyBigData);
}

// let btn = document.getElementById('my_button');
// btn.addEventListener('click', function click(e) {
//     console.log(e.id);
// });

{
    let j;
    for(j=0; j<10; j++) {
        let i = j;
        console.log(i);
    }
}