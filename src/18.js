/**
 * Question: https://scriptoj.com/problems/18
 * 完成函数 commafy，它接受一个数字作为参数，返回一个字符串，可以把整数部分从右到左每三位数添加一个逗号，
 * 如：12000000.11 转化为 12,000,000.11。
 * 
 */

/*
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

// first answer
function commafy(num) {
  if (typeof num !== 'number') {
    return ''
  }
  var numStrings = num.toString().split('.')
  var integer = numStrings[0]
  var reversedIntegers = []
  for (var i = 0; i < integer.length; i++) {
    reversedIntegers.unshift(integer.charAt(i))
  }
  var newIntegers = []
  reversedIntegers.forEach(function (val, index) {
    newIntegers.unshift(val)
    if ((index + 1) % 3 === 0) {
      newIntegers.unshift(',')
    }
  })
  if (newIntegers[0] === ',') {
    newIntegers.shift(0)
  }
  if (newIntegers[0] === '-' && newIntegers[1] === ',') {
    newIntegers.splice(1, 1)
  }
  var newInteger = newIntegers.join('')
  numStrings[0] = newInteger
  return numStrings.join('.')
}

// second answer
// TODO
function commafy2(num) {
  if (typeof num !== 'number') {
    return ''
  }
  var numStrings = num.toString().split('.')
  var integerArr = numStrings[0].split('')
  // var reversedIntegers = []
  var reversedIntegerArr = integerArr.reverse()
  // for (var i = 0; i < integer.length; i++) {
  //   reversedIntegers.unshift(integer.charAt(i))
  // }
  var newIntegers = []
  reversedIntegers.forEach(function (val, index) {
    newIntegers.unshift(val)
    if ((index + 1) % 3 === 0) {
      newIntegers.unshift(',')
    }
  })
  if (newIntegers[0] === ',') {
    newIntegers.shift(0)
  }
  if (newIntegers[0] === '-' && newIntegers[1] === ',') {
    newIntegers.splice(1, 1)
  }
  var newInteger = newIntegers.join('')
  numStrings[0] = newInteger
  return numStrings.join('.')
}

// var numString = commafy(-100000)
console.log(commafy(-100000))
