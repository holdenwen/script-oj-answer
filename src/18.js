/**
 * Question: https://scriptoj.com/problems/18
 * 完成函数 commafy，它接受一个数字作为参数，返回一个字符串，可以把整数部分从右到左每三位数添加一个逗号，
 * 如：12000000.11 转化为 12,000,000.11。
 * 
 */

/*
 *  普通实现
 *  1. 判断数据类型
 *  2. 转换成字符串类型
 *  3. 以`.`进行分割
 *  4. 将整数部分反转
 *  5. 每3位加`,`
 *  6. 反转处理好的字符串
 *  7. 首位为`,`则删除
 *  8. 首位为`-`，并且第2位为`,`则删除第2位
 *  9. 拼接小数部分
 * 
 */

// for basic api
function commafy(num) {
  var numArr = num.toString().split('.')
  var reversedIntegerArr = numArr[0].split('').reverse()
  var newIntegerArr = []
  for (var i = 0; i < reversedIntegerArr.length; i++) {
    newIntegerArr.unshift(reversedIntegerArr[i])
    if ((i + 1) % 3 === 0) {
      newIntegerArr.unshift(',')
    }
  }
  if (newIntegerArr[0] === ',') {
    newIntegerArr.shift(0)
  }
  if (newIntegerArr[0] === '-' && newIntegerArr[1] === ',') {
    newIntegerArr.splice(1, 1)
  }
  numArr[0] = newIntegerArr.join('')
  return numArr.join('.')
}

// var numString = commafy(-100000)
console.log(commafy(-103470000.23))
