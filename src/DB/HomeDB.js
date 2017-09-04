/**
 * Created by xutao on 2017/9/4.
 */

import {openDB, closeDB, delDB} from './CreateDB'

export const getDB = function () {
  var myDB = {
    name: 'Home',
    version: 3,
    db: null
  }

  openDB(myDB, myDB.version)

  // setTimeout(function () {
  //   closeDB(myDB.db)
  //   delDB(myDB.name)
  // },500)
}