/**
 * Created by xutao on 2017/9/4.
 */

export const openDB = function(my, version, students) {

  let v = version || 1
  let res = window.indexedDB.open(my.name)
      res.onerror = function (e) {
        console.log('Open Error')
      }
      res.onsuccess = function (e) {
        let db = e.target.result || ''
      }
      res.onupgradeneeded = function (e) {
        let db=e.target.result;

        if
        (!db.objectStoreNames.contains(students)){
          db.createObjectStore(
            students,{keyPath:"id"});
        }
        console.log("DB version changed to "+ v);
      }
}

export const closeDB = function(db) {
   db.close()
}

export const delDB = function(name) {
  indexedDB.deleteDatabase(name)
}

export const addData = function(db,storeName){

  var transaction=db.transaction(storeName,'readwrite');

  var store=transaction.objectStore(storeName);


  for (var i=0;i<storeName.length;i++){
    store.add(storeName[i]);
  }
}


