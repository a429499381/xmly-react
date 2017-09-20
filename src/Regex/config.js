// 通用 单标签 提取内容前后不带 空格 回车
export const Tagtxt = function (Tag, ClassOrHref, Name) {
  let reg =  `(?:<${Tag}>|<${Tag}.+${ClassOrHref}=['"](?:.+)?(?:${Name}\\b)(?:.+)?['"]>)[\\s\\n]?([^<>]+?)[\\s\\n]?</${Tag}>`
  return new RegExp(reg, 'g')
}


// 通用 单标签 可定制任意属性名  任意属性值 Name可以多个空格分割 任意字符  ClassOrHref, Name 不写默认任意字符 要注意
export const Taghref = function (Tag, ClassOrHref) {
  // let reg =  `<${Tag}.+${ClassOrHref}=['"](?:[^<;'>"]+?)['"]>([^<>]+?)</${Tag}>`
  //  改进不需要完整匹配整个标签，
  let reg =  `<${Tag}.+${ClassOrHref}=['"]([^<;'>"]+?)['"]`
  return new RegExp(reg, 'g')
}



// 完美匹配所有标签 包裹内容  可定制 任意属性名 任意属性值  ClassOrHref ,Name 不写默认任意字符 要注意 <p></p> 没有属性除外
export const TagAll = function (Tag, ClassOrHref, Name) {
  let reg  =  `(?!</?${Tag}>)<${Tag}.+${ClassOrHref}=['"](?:.+)?(${Name}\\b)(?:.+)?['"]>([\\d\\D]+?)</${Tag}>`
  return new RegExp(reg, 'g')
}
