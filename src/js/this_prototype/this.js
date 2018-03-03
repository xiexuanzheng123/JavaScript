function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = 'Hello, I am ' + identify.call(this);
    console.log(greeting);
}

var me = {//上下文对象
    name: 'Kyle'
};

var you = {
    name: 'Reader'
};

identify.call(me);//identify中的this代表me
identify.call(you);

speak.call(me);//speak中的this代表me
speak.call(you);