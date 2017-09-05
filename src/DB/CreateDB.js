/**
 * Created by xutao on 2017/9/4.
 */



export const DB = {
   openDB : function (myDB) {
     let res = window.indexedDB.open(myDB.name, myDB.version)
     res.onerror = function (e) {
       console.log('Open Error')
     }
     res.onsuccess = function (e) {
       myDB.db = e.target.result || ''
       console.log('Sucess')
     }
     res.onupgradeneeded = function (e) {
       myDB.db =e.target.result;
       let tr = e.target.transaction, store

       if (!myDB.db.objectStoreNames.contains(myDB.ojstore.name)){
         store = myDB.db.createObjectStore(myDB.ojstore.name,{keyPath:myDB.ojstore.keypath});
       }
       console.log("DB version changed to "+ myDB.version);
     }
   },
   closeDB: function(db) {
     db.close()
     console.log('数据库已关闭')
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
   putData:function(db,storename,data){
      //添加数据，重复添加会更新原有数据
      var store = store = db.transaction(storename,'readwrite').objectStore(storename),request;
      for(var i = 0 ; i < data.length;i++){
        let dataS = data[i]
        request = store.put(data[i]);
        request.onerror = function(){
          console.error('put添加数据库中已有该数据')
        };
        request.onsuccess = function(){
          console.log(dataS, 'put添加数据已存入数据库')
        };
      }
  },
}


