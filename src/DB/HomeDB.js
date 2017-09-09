/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

// 统一 接受参数为 空间名: 版本号:(没有当前时间作为版本号) 数据集合:(必须为数组格式 可以为多维度数组)
export const HomeDB = function (data, name, version) {
  var myDB = {}
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

    console.log(myDB.ojstore.name, 'version:', myDB.version)

  }
  let Lname = ''
  let Name = 'Home'
  // 解析传过来的数据， 可以处理 一维 -- 多维数组 数据   indexedDB 接受的是 数据格式 统一为 对象
  for(var i  in data) {
      var dataL = data[i][0][0]
      var dataI = data[i]
      Lname = i
      if (dataL) {
          // for (let K  in dataI) {
          //     K = K || 0
          //     let Kname = dataI[K][0].title
          //     let dataK = dataI[K]
          //     let callback = function () {
          //       DB.addData(myDB.db,myDB.ojstore.name, dataK)
          //     }
          //     config(Lname, Kname)
          //     // 打开 indexedDB 数据库
          //     DB.openDB(myDB, callback)
          //
          // }
      } else {
              // 当前配置信息
              // 打开 indexedDB 数据库
            var add =  function (db) {
                DB.addData(db.db,db.ojstore.name, dataI)
            }
          config(Name,Lname)
          var open = function (myDB) {

                    new Promise(function (reslove,recjet) {
                        let time = 'null'

                        DB.openDB(myDB)
                        ok()
                        function ok() {
                            while (myDB.db){
                                clearInterval(time)
                                add(myDB)
                                return
                            }
                        }
                        return reslove(myDB)
                    })

            }

          open(myDB)




      }

  }


}

