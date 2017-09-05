/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

export const HomeDB = function () {

  var myDB = {
    name: 'Home',
    version: 3,
    db: 'null',
    ojstore:{
      name:'students',//存储空间表的名字
      keypath:'id'//主键
    }
  }

  var students=[{
    id: 1001,
    name: "Byron",
    age: 24
  },{
    id: 1002,
    name: "Frank",
    age: 30
  },{
    id: 1003,
    name: "Aaron",
    age: 26
  }];

  DB.openDB(myDB)
  setTimeout(add, 1000)
  function add() {
    DB.putData(myDB.db,myDB.ojstore.name, students)
  }
}

