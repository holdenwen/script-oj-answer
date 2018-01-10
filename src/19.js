/**
 * Question: https://scriptoj.com/problems/19
 * 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
 * 例如，输入 emoji.png，返回 .png。
 * 
 */

// for basic
const extname = (filename) => {
  const files = filename.split('.')
  return files.length > 1 && files[0] !== '' ? `.${files.pop()}` : ''
}

// for regular expression

console.log(extname('.dfa'))