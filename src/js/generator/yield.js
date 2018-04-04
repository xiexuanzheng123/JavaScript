function *foo(x) {
    var y = x * (yield 'Hello');
    return y;
}
var it = foo(6);
var res = it.next();
console.log(res.value);

var res = it.next(7);
console.log(res.value);//42