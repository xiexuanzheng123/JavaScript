console.log('tmp');

var tmp = 123;
if (true) {
    tmp = 'abc';//这里的tmp绑定到了块级作用域，跟外部的tmp无关，所以会报错
    let tmp;
}