var m = new Map();
m.set('foo', 42);
m.set({cool: true}, "hello world");

var it1 = m[Symbol.iterator]();
var it2 = m.entries();

console.log(it1.next());
console.log(it2.next());

console.log(m);