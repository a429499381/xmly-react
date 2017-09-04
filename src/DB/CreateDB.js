/**
 * Created by xutao on 2017/9/4.
 */

export const openDB = function(my, version) {
  let v = version || 1
  let res = window.indexedDB.open(my.name)
      res.onerror = function (e) {
        console.log('Open Error')
      }
      res.onsuccess = function (e) {
        my.db = e.target.result
      }
      res.onupgradeneeded = function (e) {
        console.log('DB version changed to' + v)
      }
}

export const closeDB = function(db) {
   db.close()
}

export const delDB = function(name) {
  indexedDB.deleteDatabase(name)
}