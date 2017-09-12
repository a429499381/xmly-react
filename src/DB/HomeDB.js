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

    console.log('配置',myDB.ojstore.name, 'version:', myDB.version)

  }

  for(var i in data) {
    // var dataI = data[i]
    (function (i, datas) {
      setTimeout(function () {
        if (i === 'Lists') {
          for (var k = 0; k < datas.length; k++) {
            (function (i, k) {
              var J = k + 1
              config(i, J)

              DB.openDB(myDB)
                .then(function (db) {
                  if (db) {
                    DB.addData(db,J,datas[k])
                    console.log('add Data  ok', db)
                  }
                  setTimeout(function () {
                    DB.closeDB(db)
                  },0)

                })
            })(i, k)

          }
        } else {
          config('Home', i)

          DB.openDB(myDB)
            .then(function (db) {
              if (db) {
                DB.addData(db,i,datas)
                console.log('add Data  ok', db)
              }
              setTimeout(function () {
                DB.closeDB(db)
              },0)

            })
        }


      },0)
    })(i, data[i])


  }



}

