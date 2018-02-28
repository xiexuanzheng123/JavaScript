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

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);