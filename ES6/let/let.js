/**
 * 1 let声明的变量在块之外显示为not defined
 * 
 * 2 for循环中let声明的i只在for循环体内有效，在循环体外无效，如果使用var则在循环体外也有效
 * 
 * 3 for循环中let声明的i，每次循环都是新值，javascript引擎内部会记住上一次循环的结果
 * 
 * 4 for循环的另一个特别之处是for循环自身是一个父级作用域，而循环内部是一个单独的子作用域
 * 
 * 5 var声明的变量存在变量提升，let声明的变量一定要先声明再使用，否则报错(ReferenceError)
 * 
 * 6 暂时性死区，只要块级作用域内存在let命令，它所声明的变量就绑定到这个作用域，不再受外部影响
 */