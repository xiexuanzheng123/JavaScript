function foo() {
    return (a) => {
        console.log(this);
        console.log(this.a);
    };
}

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};

var bar = foo.call(obj1);//在这个地方foo的this绑定到了obj1
                        //箭头函数的this无法修改，所以无论怎么调用都是obj1的a值

console.log(bar);//f (a) {
                 //   console.log(_this);
                 //   console.log(_this.a);
                 //   }

bar.call(obj2);//2