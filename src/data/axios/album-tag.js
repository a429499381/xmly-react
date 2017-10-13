import {GetId} from './get.js'
import {Taghref, Tagtxt, TagAll} from '../Regex/config'

export  const albumTagData = (id) => {
    var SearchData = {}
    SearchData.albumTag = []
    let OK = 'No'
    let time = 'No'

  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {
        let callback = function () {
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
        }
        let albumTag = function () {
            let data = ''
            GetId(id).then(res => {
                data = res.data
                let li = TagAll('li', 'class', 'item item-3')
                let href = Taghref('a', 'href')
                let src = Taghref('img', 'src')
                let name = Tagtxt('p', 'class', 'name')
                let n = 0
                data.replace(li,function (match) {
                    SearchData.albumTag[n]= {}
                    match.replace(href, function (match1, href) {
                        Object.assign(SearchData.albumTag[n], {href})
                    })
                    match.replace(src, function (match1, src) {
                        Object.assign(SearchData.albumTag[n], {src})
                    })
                    match.replace(name, function (match1, name) {
                        Object.assign(SearchData.albumTag[n], {name})
                    })
                    n++
                })
                setTimeout(function () {
                    if(SearchData.albumTag[0] !== undefined) {
                        OK = 'OK'
                    }
                },0)
            })
        }
        albumTag()
        callback()


    })

    return  Prom
}

