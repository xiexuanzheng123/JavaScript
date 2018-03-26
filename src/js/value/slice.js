/**
 * 返回一个子片段，对原先的string没有影响，与subString的区别是，可以是有负数当参数
 * 相当于length+start， length+end
 * 
 * String.slice(start, end)
 */

 var s = 'abcdefg';
 s.slice(0, 4);//abcd
 s.slice(2, 4);//cd
 s.slice(4);//efg
 s.slice(3, -1);//def
 s.slice(3, -2);//de
 s.slice(-3, -1);//ef


/**
 * Array.slice(start, end)
 * 
 */
var a = [1, 2, 3, 4, 5];
a.slice(0, 3);//[1, 2, 3]
a.slice(3);//[4, 5]
a.slice(1, -1);//[2, 3, 4]
a.slice(-3, -2);//[3]
