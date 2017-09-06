/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

export const HomeDB = function (name, version, data) {
  // 三个参数不能为空
  if (name && version && data) {
        for(let i in data) {
            // 解析数组
            let myDB = {
                    name: name,
                    version:  i,
                    db: 'null',
                    ojstore:{
                        name: data[i],//存储空间表的名字
                        keypath:'href'//主键
                    }
                }

            let add =  function () {
                    DB.putData(myDB.db,myDB.ojstore.name, data)
                }
            // 打开 indexedDB 数据库
            DB.openDB(myDB)
            // 延长2000毫秒 把数据添加到 数据库
            setTimeout(add, 2000)
        }
    }
}

