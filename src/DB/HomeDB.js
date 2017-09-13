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

  var  DbOpen = function (myDB, datas) {
    //  打开指定数据 空间。
    DB.openDB(myDB)
    //  成功后返回该空间的 db
      .then(function (db) {
        // 将数组对象覆盖写入。
        DB.putData(db,myDB.ojstore.name,datas)
        // 写入完成后返回 db
          .then(function (db) {
            // 关闭当前空间数据 空间
            DB.closeDB(db)
          })
      })

  }


  for(var i in data) {
        if (i === 'Lists') {
          var dataL = data[i]
          for (var k = 0; k < dataL.length; k++) {
            //  当前配置文件
            config(i , k)
            // 执行 写入数据 indexedDB
            DbOpen(myDB, dataL[k])
          }
        } else {
          //  当前配置文件
          config('Home', i)
          // 执行 写入数据 indexedDB
            DbOpen(myDB, data[i])
        }
  }



}

