// 通用 单标签 提取内容前后不带 空格 回车
export const tagtxt = function (N) {
    let reg =  `/(?:<${N}.+?>|<${N}>)[\\s\\n]?([^<>]+?)[\\s\\n]?<\\/${N}>/g`
    return reg
}


// 通用 单标签 可定制任意属性名  任意属性值 Name可以多个空格分割 任意字符  N1, Name 不写默认任意字符 要注意
export const taghref = function (N, N1, Name) {
    let reg =  `/<${N}.+${N1}=['"](?:.+)?(${Name})\\b(?:.+)?['"]>([^<>]+?)<\\/${N}>/g`
    return reg
}



// 完美匹配所有标签 包裹内容  可定制 任意属性名 任意属性值  N1 ,Name 不写默认任意字符 要注意 <p></p> 没有属性除外
export const tagAll = function (N, N1, Name) {
    let reg  =  `/(?!<\/?${N}>)<${N}.+${N1}=['"](?:.+)?(${Name})(?:.+)?['"]>([\\d\\D]+?)<\\/${N}>/`
    return reg
}
