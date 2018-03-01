/**
 * 严格模式下，全局对象无法使用默认绑定，
 * 
 * 严格模式中，this的绑定与调用位置无关
 */
// function foo() {
//     "use strict";
//     console.log(this.a);//严格模式下，this无法默认绑定，只能为undefined
// }
// var a = 2;
// foo();

function foo() {
    console.log(this.a);
}
var a = 2;
(function () {
    "use strict";
    
    foo();
})();