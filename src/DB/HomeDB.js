/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

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

  for(var i in data) {
    // var dataI = data[i]
    (function (i, datas) {
      setTimeout(function () {
        if (i === 'Lists') {
          for (var k = 0; k < datas.length; k++) {
            (function (i, k, datas) {
              var J = k + 1
              //  当前配置文件
              config(i, J)
              // 执行 写入数据 indexedDB
              DbOpen(myDB, datas)
            })(i, k, datas[k])

          }
        } else {
          //  当前配置文件
          config('Home', i)
          // 执行 写入数据 indexedDB
            DbOpen(myDB, datas)
        }
      },0)
    })(i, data[i])


  }

    var  DbOpen = async function (myDB, datas) {
      DB.openDB(myDB)
        .then(function (db) {
            DB.addData(db,myDB.ojstore.name,datas)
            return db
          })
        .then(function (db) {
            DB.closeDB(db)
          })

  }


}

