/**
 * Created by xutao on 2017/9/21.
 */
export const  BackArray = (fn) => {
  // 传进来的函数代码转换为字符
  let str = fn.toString()
  let data = []
  // 获取函数名
  let name = fn.name
  // 获取 fn函数开头 let OO结尾
  let All = `\\b${name}\\b[\\d\\D]+?var(\\s+)?OO`
  let regA = new RegExp(All, 'g')
  // 提取每个 var 的 变量名   rect 经过编译后 let 变成 var
  let reg = /\bvar\b(?:\s+)?([^$]+?)(\s+)?=/g

  str.replace(regA, (match) => {
    match.replace(reg, (match, name) => {
      data.push(name)
    })
  })

  return  data
}
