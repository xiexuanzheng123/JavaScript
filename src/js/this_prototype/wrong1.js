function foo(num) {
    console.log('foo: ' + num);

    this.count++;//this并不是指向函数本身
                //可以使用foo来代替this，使用foo.count
}

foo.count = 0;

var i;

for(i=0; i<10; i++) {
    if(i > 5) {
        foo.call(foo, i);//强制this指向foo函数对象 
    }
}
console.log(foo.count);
//console.log(count);