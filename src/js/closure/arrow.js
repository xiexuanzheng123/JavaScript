var obj = {
    id: "awesome",
    cool: function coolFn() {
        console.log(this.id);
    }
};

var id = "not awesome";
obj.cool();//awesome
setTimeout(obj.cool, 100);//not awesome问题在于cool函数失去了跟this的绑定

/**\
 * 解决失去绑定this的方法有好几种：
 * 1 var self = this
 */

 var obj = {
     count: 0,
     cool: function coolFn() {
         var self = this;

         if(self.count < 1) {
             setTimeout(function timer() {
                 self.count++;
                 console.log('awesome?');
             }, 100);
         }
     }
 };

 obj.cool();

 var obj = {
     count: 0,
     cool: function coolFn() {
         if (this.count < 1) {
             setTimeout(() => {
                 this.count++;
                 console.log('awesome ? ');
             })
         }
     }
 };
 obj.cool();