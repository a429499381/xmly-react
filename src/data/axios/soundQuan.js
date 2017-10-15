import {GetId} from './get.js'
import {Taghref, Tagtxt, TagAll} from '../Regex/config'

export  const soundQuanData = (id) => {
    var SearchData = {}
    SearchData.soundQuan = []
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
        let albumQuan = function () {
            let data = ''
            GetId(id).then(res => {
                data = res.data
                let listsound = TagAll('ul', 'class', 'list')
                let item = TagAll('li', 'class', 'item item-tp1 cl is-ready')
                let href = Taghref('li',  'data-url')
                let soundUrl = Taghref('div',  'sound-url')
                let duration = Taghref('div',  'sound_duration')
                let src = Taghref('img', 'src')
                let time = Tagtxt('p', 'class', 'time-cont')
                let title = Tagtxt('p', 'class', 'tit')
                let playNum = /<span><i class="icon icon-arrow1 mgr-5"><\/i>(\d+)<\/span>/g
                let comment = /<span><i class="icon icon-commetn1 mgr-5"><\/i>(\d+)<\/span>/g
                let time1 = /<span><i class="icon icon-time1 mgr-5"><\/i>(\d+)<\/span>/g
                let n = 0
                data.replace(listsound, function (data) {
                    data.replace(item,function (match) {
                        SearchData.soundQuan[n]= {}
                        match.replace(href, function (match1, href) {
                            Object.assign(SearchData.soundQuan[n], {href})
                        })
                        match.replace(soundUrl, function (match1, soundUrl) {
                            Object.assign(SearchData.soundQuan[n], {soundUrl})
                        })
                        match.replace(duration, function (match1, duration) {
                            Object.assign(SearchData.soundQuan[n], {duration})
                        })
                        match.replace(src, function (match1, src) {
                            Object.assign(SearchData.soundQuan[n], {src})
                        })
                        match.replace(time, function (match1, time) {
                            Object.assign(SearchData.soundQuan[n], {time})
                        })
                        match.replace(title, function (match1, title) {
                            Object.assign(SearchData.soundQuan[n], {title})
                        })
                        match.replace(playNum, function (match1, playNum) {
                            Object.assign(SearchData.soundQuan[n], {playNum})
                        })
                        match.replace(comment, function (match1, comment) {
                            Object.assign(SearchData.soundQuan[n], {comment})
                        })
                        match.replace(time1, function (match1, time1) {
                            Object.assign(SearchData.soundQuan[n], {time1})
                        })
                        n++
                    })
                })

                setTimeout(function () {
                    if(SearchData.soundQuan[0] !== undefined) {
                        OK = 'OK'
                    }
                },0)
            })
        }
        albumQuan()
        callback()


    })

    return  Prom
}
