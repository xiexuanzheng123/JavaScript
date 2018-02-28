function foo(num) {
    console.log('foo: ' + num);

    this.count++;//this并不是指向函数本身
}

foo.count = 0;

var i;

for(i=0; i<10; i++) {
    if(i > 5) {
        foo.call(foo, i);
    }
}
console.log(foo.count);
//console.log(count);