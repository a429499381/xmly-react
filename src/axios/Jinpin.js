import {GetId} from './get.js'
import {TagAll, Taghref, Tagtxt} from '../Regex/config'

export  const JinPinData = (id) => {
    let OK = 'No'
    let time = 'No'


  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {


       GetId(id).then((res) => {
           let data = res.data
           let div = TagAll('div', 'class', 'album-price')

            data.replace(div, function (match) {

              return OK = 'OK'
            })

        })

        // 5秒后退出 定时
        time  = setInterval(Go,100)
        setTimeout(function () {
          clearInterval(time)
        },5000)

        function Go() {
            if (OK === 'OK') {
                clearInterval(time)
                resolve()

            }
        }
    })

    return  Prom
}

