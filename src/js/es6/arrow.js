var obj = {
    id: 'awesome',
    cool: function coolFn() {
        console.log(this.id);
    }
};
var id = 'not awesome';
obj.cool();

setTimeout(obj.cool, 100);//丢失了同this的绑定

    /*=================================*/
   /*       比较上下两个不同            */
  /*                                  */
 /*==================================*/

 var obj = {
	count: 0,
	cool: function coolFn(){
		var self = this;//解决丢失绑定this的问题
		if(self.count < 1){
			setTimeout(function timer(){
				self.count++;
				console.log('awesome?');
			}, 100);
		}
	}
};
obj.cool();

    /*==================================*/
   /*       arrow function             */
  /*                                  */
 /*==================================*/

var obj = {
    count: 0,
    cool: function coolFn() {
        if(this.count < 1) {
            setTimeout(() => {
                this.count++;
                console.log('awesome?');
            }, 110);
        }
    }
}
obj.cool();

   /*============================ ======*/
   /*       使用bind                   */
  /*                                  */
 /*==================================*/

 var obj = {
    count: 0,
    cool: function coolFn() {
        if(this.count < 1) {
            setTimeout(function timer() {
                this.count++;
                console.log('more awesome');
            }.bind(this), 110);
        }
    }
}
obj.cool();