import {GetId} from './get.js'

export  const albumTagData = (id) => {
    var SearchData = {}
    SearchData.albumTag = []
    let OK = 'No'
    let time = 'No'

  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {
        let albumTag = function () {
            let data = ''
            GetId(id).then(res => {
                data = res
            })

        }




      time  = setInterval(Go,100)
      setTimeout(function () {
        clearInterval(time)
      },5000)
      function Go() {
          if (OK === 'OK') {
              clearInterval(time)
              resolve(SearchData)

          }
      }

    })

    return  Prom
}

