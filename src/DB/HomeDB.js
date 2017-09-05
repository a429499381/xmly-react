/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

export const HomeDB = function (name, name1, version, data) {

  if (name && name1 && data) {
    var myDB = {
      name: name,
      version: version,
      db: 'null',
      ojstore:{
        name: name1,//存储空间表的名字
        keypath:'name'//主键
      }
    }


    DB.openDB(myDB)
    setTimeout(add, 2000)

    function add() {
      DB.putData(myDB.db,myDB.ojstore.name, data)
    }

  } else {
    console.log(name1, '参数不全 不能保存')
  }
}

