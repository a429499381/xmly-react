/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

// 统一 接受参数为 空间名: 版本号:(没有当前时间作为版本号) 数据集合:(必须为数组格式 可以为多维度数组)
export const GetData = function (name, name1) {
  var myDB = {}
  var data = {}
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

  var  DbOpen = function (myDB) {
    //  打开指定数据 空间。
    DB.openDB(myDB)
    //  成功后返回该空间的 db
      .then(function (db) {
        // 将对象覆盖写入 data 数组。
        DB.searchData(db,myDB.ojstore.name)
        // 完成后返回 db
          .then(function (db) {
            // 关闭当前空间数据 空间
            // DB.closeDB(db)
            console.log(db)
          })
      })
  }

  config(name, name1)
  DbOpen(myDB)


}

