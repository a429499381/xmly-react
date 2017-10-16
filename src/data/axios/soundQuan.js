import {GetId} from './get.js'
import {Taghref, Tagtxt, TagAll} from '../Regex/config'
import {soundQuanJson} from "./soundQuanJson";

export  const soundQuanData = (id) => {
    var SearchData = {}
    let OK = 'No'
    let time = 'No'
    let N = 0

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
        let albumQuan = function () {
            let data = ''
            let rank = id
            let hot = 'http://m.ximalaya.com/explore/more_track?page=1&per_page=10&category_id=10&condition=hot'
            let favorite = 'http://m.ximalaya.com/explore/more_track?page=1&per_page=10&category_id=10&condition=favorite'
            let regex = function (data, name) {
                // let listsound = TagAll('ul', 'class', 'list')
                let item = TagAll('li', 'class', 'item item-tp1 cl is-ready')
                let href = Taghref('li',  'data-url')
                let soundUrl = Taghref('div',  'sound_url')
                let duration = Taghref('div',  'sound_duration')
                let src = Taghref('img', 'src')
                let time = Tagtxt('p', 'class', 'time-cont')
                let title = Tagtxt('p', 'class', 'tit')
                let playNum = /<span><i class="icon icon-arrow1 mgr-5"><\/i>(\d+)<\/span>/g
                let comment = /<span><i class="icon icon-commetn1 mgr-5"><\/i>(\d+)<\/span>/g
                let time1 = /<span><i class="icon icon-time1 mgr-5"><\/i>(\d+)<\/span>/g
                let n = 0
                    data.replace(item,function (match) {
                        SearchData[name][n]= {}
                        match.replace(href, function (match1, href) {
                            Object.assign(SearchData[name][n], {href})
                        })
                        match.replace(soundUrl, function (match1, soundUrl) {
                            Object.assign(SearchData[name][n], {soundUrl})
                        })
                        match.replace(duration, function (match1, duration) {
                            Object.assign(SearchData[name][n], {duration})
                        })
                        match.replace(src, function (match1, src) {
                            Object.assign(SearchData[name][n], {src})
                        })
                        match.replace(time, function (match1, time) {
                            Object.assign(SearchData[name][n], {time})
                        })
                        match.replace(title, function (match1, title) {
                            Object.assign(SearchData[name][n], {title})
                        })
                        match.replace(playNum, function (match1, playNum) {
                            Object.assign(SearchData[name][n], {playNum})
                        })
                        match.replace(comment, function (match1, comment) {
                            Object.assign(SearchData[name][n], {comment})
                        })
                        match.replace(time1, function (match1, time1) {
                            Object.assign(SearchData[name][n], {time1})
                        })
                        n++
                    })

                setTimeout(function () {
                    if(SearchData[name][0] !== undefined) {
                            OK = 'OK'
                    }
                },0)
            }
            GetId(id).then(res => {
                let name = 'rank'
                SearchData.rank = []
                regex(res.data, name)
            })
            soundQuanJson(hot).then(data => {
                SearchData.hot = []
                regex(data, 'hot')
                console.log('soundQuan Json', data.length)
            })
            soundQuanJson(favorite).then(data => {
                SearchData.favorite = []
                regex(data, 'favorite')
                console.log('soundQuan Json', data.length)
            })

        }
        albumQuan()
        callback()


    })

    return  Prom
}
