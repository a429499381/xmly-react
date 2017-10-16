import {GetId} from './get.js'
import {Taghref, Tagtxt, TagAll} from '../Regex/config'

export  const albumQuanData = (id) => {
    var SearchData = {}
    SearchData.rank = []
    SearchData.hot = []
    SearchData.favorite = []
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
        let albumQuan = function (id, name) {
            let data = ''
            GetId(id).then(res => {
                data = res.data
                let listAlbum = TagAll('section', 'class', 'list-album wrapper')
                let item = TagAll('a', 'class', 'item cl block')
                let href = Taghref('a',  'href')
                let src = Taghref('img', 'src')
                let title = Tagtxt('p', 'class', 'name')
                let playNum = /<span><i class="icon icon-player mgr-5"><\/i>(\d+)<\/span>/g
                let n = 0
                data.replace(listAlbum, function (data) {
                    data.replace(item,function (match) {
                        SearchData[name][n]= {}
                        match.replace(href, function (match1, href) {
                            Object.assign(SearchData[name][n], {href})
                        })
                        match.replace(src, function (match1, src) {
                            Object.assign(SearchData[name][n], {src})
                        })
                        match.replace(title, function (match1, title) {
                            Object.assign(SearchData[name][n], {title})
                        })
                        match.replace(playNum, function (match1, playNum) {
                            Object.assign(SearchData[name][n], {playNum})
                        })
                        n++
                    })
                })

                setTimeout(function () {
                    if(SearchData[name][0] !== undefined) {
                        OK = 'OK'
                    }
                },0)
            })
        }
        albumQuan(id, 'rank')
        albumQuan(id, 'hot')
        albumQuan(id, 'favorite')
        callback()


    })

    return  Prom
}