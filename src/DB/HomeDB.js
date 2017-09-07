/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

// 统一 接受参数为 空间名: 版本号:(没有当前时间作为版本号) 数据集合:(必须为数组格式 可以为多维度数组)
export const HomeDB = function (data, name, version) {

  let DbVersion  = version || new Date().getTime()
  let addData = function addData(name, name1, data) {
        // 解析数组
        let myDB = {
            name: name || 'Home',
            version: DbVersion,
            db: 'null',
            ojstore: {
                name: name1,//存储空间表的名字
                keypath: 'href'//主键
            }
        }
        DbVersion = DbVersion + 1
        console.log(myDB.ojstore.name, 'version:', myDB.version)


        // 打开 indexedDB 数据库
        DB.openDB(myDB, data)

    }
  let Lname = ''
  let Name = 'Home'
  // 解析传过来的数据， 可以处理 一维 -- 多维数组 数据   indexedDB 接受的是 数据格式 统一为 对象
  for(let i  in data) {
      let dataL = data[i][0][0]
      let dataI = data[i]
      Lname = i
      if (dataL) {
          for (let K  in dataI) {
              K = K || 0
              let Kname = dataI[K][0].title
              let dataK = dataI[K]
              addData(Lname, Kname, dataK)
          }
      } else {
          addData(Name,Lname, dataI)
      }




  }


}

