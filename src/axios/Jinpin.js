import {GetId} from './get.js'
import {TagAll, Taghref, Tagtxt} from '../Regex/config'

export  const JinPinData = (id) => {
    let JinPinData = {}
    JinPinData.top = []
    JinPinData.tabDetail = []
    JinPinData.tabProgram = []
    JinPinData.tabComment = []
    let OK = 'No'
    let time = 'No'


  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {


       GetId(id).then((res) => {
           let data = res.data

           let top = TagAll('div', 'class', 'buyintro-top')
           let price = TagAll('div', 'class', 'album-price')
           let star = TagAll('div', 'class', 'album-mark-star')
           let tabs = TagAll('div', 'class', 'album-tabs')

           let tabDetail = TagAll('div', 'id', 'tabDetail')

           let tabProgram = TagAll('div', 'id', 'tabProgram')

           let tabComment = TagAll('div', 'id', 'tabComment')

           let buy = TagAll('div', 'class', 'buyintro-buy')



            // 精品页 头部 数据
            data.replace(top, function (match) {
                 let Num = 0
                 let title = Tagtxt('h2', 'class', 'title')
                 let href = Taghref('a', 'href')
                 let id = Taghref('a', 'album_id')
                 let img = Taghref('img', 'src')
                 let subscribe = Tagtxt('span', 'class', 'album-subscribe')
                 let suburl = Taghref('img', 'data-suburl')
                 let unsuburl = Taghref('img', 'data-unsuburl')
                 let loginurl = Taghref('img', 'data-loginurl')
                 let priceOld = Tagtxt('ins','class', 'album-price-old')
                 let priceNew = Taghref('del', 'class', 'data-mgl-5')
                 let othen = TagAll('p')
                 let playNum = Tagtxt('span', 'class', 'album-playNum')
                 let grade = Tagtxt('span', 'class', 'comment-star')
                 let tablink = Tagtxt('a', 'class', 'tablink')
                 let top = JinPinData.top[Num]= {}

                 match.replace(title, function (match, title) {
                   Object.assign(top, {title})
                 })
                match.replace(title, function (match, title) {
                  Object.assign(top, {title})
                })
                match.replace(title, function (match, title) {
                  Object.assign(top, {title})
                })
                match.replace(title, function (match, title) {
                  Object.assign(top, {title})
                })
            })

            // 详情 tabDetail
                data.replace(tabDetail, function (match) {
                   let model = TagAll('section', 'class', 'album-model')
                   let title = Taghref('p', 'class', 'hr-under')
                   let title1 = Tagtxt('span', 'class', '')
                   let txt =  Tagtxt('p', 'data-flag', 'normal')
                   let img = Taghref('img','src')
                   let origin = Taghref('img','data-origin')
                   let preview = Taghref('img','data-preview')
                   let previewH = Taghref('img','data-preview-height')
                   let previewW = Taghref('img','data-preview-width')
                   let large = Taghref('img','data-large')
                   let largeH = Taghref('img','data-large-height')
                   let largeW = Taghref('img','data-large-width')
                   match.replace(model, function (match) {

                   })
                })
            // tabProgram
               data.replace(tabDetail, function (match) {

               })
            // tabComment
               data.replace(tabDetail, function (match) {

               })
            // 购买
               data.replace(buy, function (match) {
                 let btnBuy = TagAll('a', 'class', 'btn1')
                 let lisBtn = TagAll('span', 'class', 'album-lisBtn')
                 let albumid = Taghref('a', 'data-albumid')
                 let category = Taghref('a', 'data-category')
                 let dataDone = Taghref('a', 'buy-album')
                 let tag = Taghref('a', 'data-tag')
                 let event = Taghref('a', 'data-event')
                 let role = Taghref('a', 'data-role')
                 let xmlogSpy = Taghref('a', 'xmlog-spy')
                 let xmlogId = Taghref('a', 'xmlog-id')
                 let xmlogMod= Taghref('a', 'xmlog-mod')
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

