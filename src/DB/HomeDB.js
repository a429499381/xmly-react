/**
 * Created by xutao on 2017/9/4.
 */

import {DB} from './CreateDB'

export const HomeDB = function (name, version, data) {
  // 三个参数不能为空
  if (name && version && data) {
    // 判断 data 数组 还是 单个 对象
    if(data.length){
        // 解析数组
        data.map((item, index) => {
            let myDB = {
                name: name,
                version:  index,
                db: 'null',
                ojstore:{
                    name: item,//存储空间表的名字
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
        })
    }

  } else {
      console.log('name :', 'version :', ' data ：', '不能为空')
  }
}

