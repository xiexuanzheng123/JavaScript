/**
 * 在javascript中，prototype机制会把对象关联到其他对象，
 * 1 委托中最好把状态保存在委托者而不是委托目标
 * 2 
 */

 function Foo(who) {
     this.me = who;
 }
 Foo.prototype.identify = function() {
     return 'I am ' + this.me;
 }
 function Bar(who) {
    Foo.call(this, who);
 }
 Bar.prototype = Object.create(Foo.prototype);

 Bar.prototype.speak = function() {
     alert('Hello, ' + this.identify() + '.');
 }

 var b1 = new Bar('b1');
 var b2 = new Bar('b2');

 b1.speak();
 b2.speak();