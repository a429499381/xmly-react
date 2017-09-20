/**
 * Created by xutao on 2017/9/21.
 */
export const  BackArray = (fn) => {
  let str = fn.toString()
  let data = []
  let reg = /\bvar\b(?:\s+)?([^$]+?)(\s+)?=/g

  str.replace(reg, (match, name) => {
    data.push(name)
  })

  return  data
}
