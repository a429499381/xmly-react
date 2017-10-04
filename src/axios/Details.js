import {GetId} from './get.js'
import  {Taghref, TagAll, Tagtxt}  from '../Regex/config'

export  const DetailData = (id) => {
  //  分类 数据提取
    var Prom = new Promise((resolve, reject) => {
      let data = ''
      GetId(id).then(res => {
        data = res
        console.log(data)
      })


    })

    return  Prom
}

