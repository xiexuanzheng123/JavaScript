/**
 * 对象跟字符串相加的情况
 * 或者两个对象相加
 * 首先对对象调用ToPrimitive抽象操作，该抽象操作再调用[[DefaultValue]]
 * 
 * 转换规则跟toNumber一样先调用valueOf方法再调用toString方法
 * 数组的valueOf操作无法得到简单基本类型值，于是调用toString方法
 */
var a = [1, 2];
var b = [3, 4];
a + b;//"1,23,4"

/**
 * a + ""对a调用valueOf方法，然后通过toString抽象操作符将返回值转换为字符串 
 * String（a）对a调用toString()方法
 * /
 *
 * 
 * 
 *  
 /* 
 * 减法则会将字符串转换为数字
 * * / - 都是只能用于数字
 */

var a = "3.14";
var b = a - 0;
b;//3.14
