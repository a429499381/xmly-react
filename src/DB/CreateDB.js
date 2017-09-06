/**
 * Created by xutao on 2017/9/4.
 */



export const DB = {
   openDB : function (myDB, data) {
     let res = window.indexedDB.open(myDB.name, myDB.version)
     res.onerror = function (e) {
       console.log(myDB.ojstore.name, 'Open Error')
     }
     res.onsuccess = function (e) {
       myDB.db = e.target.result || ''
       console.log(myDB.ojstore.name, 'Sucess')
       DB.addData(myDB.db,myDB.ojstore.name, data)
     }
     res.onupgradeneeded = function (e) {
       myDB.db =e.target.result;
       let tr = e.target.transaction, store

       if (!myDB.db.objectStoreNames.contains(myDB.ojstore.name)){
         store = myDB.db.createObjectStore(myDB.ojstore.name,{keyPath:myDB.ojstore.keypath});
       }
       console.log(myDB.ojstore.name, "DB version changed to "+ myDB.version);
     }
   },
   closeDB: function(db) {
     db.close()
     console.log(db, '数据库已关闭')
   },
   delDB: function (dbname) {
     indexedDB.deleteDatabase(dbname)
   },
   addData: function(db,storeName,data) {
     var transaction=db.transaction(storeName,'readwrite');
     var store=transaction.objectStore(storeName);

     for (var i=0;i<data.length;i++){
       store.add(data[i]);
       store.onsuccess =function () {
         console.log('Ok', data[i])
       }
       store.onerror = function () {
         console.log('Error', data[i])
       }
     }
     DB.closeDB(db)
   },
   getDataByKey:function(db,storename,key){
      //根据存储空间的键找到对应数据
      var store = db.transaction(storename,'readwrite').objectStore(storename);
      var request = store.get(key);
      request.onerror = function(){
        console.error('getDataByKey error');
      };
      request.onsuccess = function(e){
        var result = e.target.result;
        console.log('查找数据成功')
        console.log(result);
      };
  },
   putData:function(db,storename,data, type){
      //添加数据，重复添加会更新原有数据
      var store = store = db.transaction(storename,'readwrite').objectStore(storename),request;
      if (type == 'obj2') {
        for (let K = 0; K < data.length; K++) {
          let item = data[K]
          put(item)
        }
      }
      put(data)
      function put(data) {
        for(var i = 0 ; i < data.length;i++){
          let dataS = data[i]
          request = store.put(data[i]);
          request.onerror = function(){
            console.error(storename,'put添加数据库中已有该数据')
          };
          request.onsuccess = function(){
            console.log(storename, 'put添加数据已存入数据库')
          };
        }

      }
  },
   searchData:function (db,storename, data) {
     let store = store = db.transaction(storename,'readwrite').objectStore(storename),request;
     // let range = IDBKeyRange.lowerBound(1);
     request = store.openCursor()
     request.onsuccess = function (e) {
       let cursor = e.target.result
       if (cursor) {
         // 搜索到的内容保存到 data数据中
         data.push(cursor.value)
         // 下一个  如果没有 返回 undefine
         cursor.continue()
       } else {
         console.log('查询结束')
       }
     }
   }
}


