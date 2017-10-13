import {GetId} from './get.js'
import {Taghref, Tagtxt, TagAll} from '../Regex/config'

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
            let li = TagAll('li', 'class', 'item item-3')
            let href = Taghref('a', 'href')
            let img = Taghref('img', 'src')
            let txt = Tagtxt('p', 'class', 'name')
            let album = SearchData.albumTag
            let n = 0
            data.replace(li,function (match) {
                album[n]= {}
                match.replace(href, function (match1, href) {
                    album[n].push({href})
                })
                match.replace(img, function (match1, img) {
                    album[n].push({img})
                })
                match.replace(txt, function (match1, txt) {
                    album[n].push({txt})
                })
                n++
            })
            setTimeout(function () {
                return OK = 'OK'
            },0)
        }

        albumTag()


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

