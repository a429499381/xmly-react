/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

export const HomeDB = function (name, version, data, type) {

  let DbVersion  = version
  for(let i in data) {
    let callback = function(myDB) {
      DB.putData(myDB.db,myDB.ojstore.name, data, type)
    }
    // 解析数组
    let myDB = {
      name: name,
      version: DbVersion,
      db: 'null',
      ojstore: {
        name: i,//存储空间表的名字
        keypath: 'href'//主键
      }
    }
    DbVersion = DbVersion + 1
    console.log(myDB.ojstore.name, 'version:', myDB.version)


    // 打开 indexedDB 数据库
    DB.openDB(myDB, data[i])

  }


}

