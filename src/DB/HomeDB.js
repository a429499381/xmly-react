/**
 * Created by xutao on 2017/9/4.
 */

import {openDB, addData} from './CreateDB'

export const getDB = function () {
  var myDB = {
    name: 'Home',
    version: 3,
    db: 'null'
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

  //
  // openDB(myDB, myDB.version, students)

  openDB(myDB.name,myDB.version, students);

  setTimeout(function (){
      addData(myDB.db, students);
    }, 1000);

  // setTimeout(function () {
  //   closeDB(myDB.db)
  //   delDB(myDB.name)
  // },500)

  // var transaction=db.transaction(['students','taecher'])
  // var objectStore=transaction.objectStore('students')
}