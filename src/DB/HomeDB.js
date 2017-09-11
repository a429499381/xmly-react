/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './DB'

// 统一 接受参数为 空间名: 版本号:(没有当前时间作为版本号) 数据集合:(必须为数组格式 可以为多维度数组)
export const HomeDB = function (data, name, version) {
  var myDB = {}
  var config = function (name, name1, version) {
    let DbVersion  = version || new Date().getTime()
    // 解析数组
    myDB = {
      name: name || 'Home',
      version: DbVersion,
      db: 'null',
      ojstore: {
        name: name1,//存储空间表的名字
        keypath: 'href'//主键
      }
    }

    console.log('配置',myDB.ojstore.name, 'version:', myDB.version)

  }
  let Lname = 0
  let Name = 'Home'
  let start = 0
  let end = 0
  let up = 0;
  // 解析传过来的数据， 可以处理 一维 -- 多维数组 数据   indexedDB 接受的是 数据格式 统一为 对象
  // for(var i  in data) {
  //       (function (dataI,name1, N) {
  //
  //         setTimeout(function () {
  //           config(Name,name1)
  //           myDB.db === null ? DB.closeDB(myDB.db) : DB.openDB(myDB)
  //           DB.addData(myDB.db,name1,dataI)
  //         },0)
  //
  //
  //         })(data[i],i, Lname=Lname+1)
  //
  //     }

  for(var i in data) {
      // var dataI = data[i]
      (function (name,data) {
         config('Home', name)
        DB.openDB(myDB).then(function (db) {
          console.log('Promise 成功', db.objectStoreNames)
           // DB.addData(db,name,data)
            DB.closeDB(db)
        }).then(function (db) {
        })

    })(i, data[i])
  }

 
}

