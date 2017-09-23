import {GetId} from './get.js'
import {TagAll, Taghref, Tagtxt} from '../Regex/config'

// 返回传进去函数 中变量名 的数组
import {BackArray} from '../Array/callArray'

export  const JinPinData = (id) => {
    let JinPinData = {}
    JinPinData.top = []
    JinPinData.tabDetail = []
    JinPinData.tabProgram = []
    JinPinData.tabComment = []
    JinPinData.buy = {}
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

           let tabDetail = /(?!<\/?div>)<div.+id=['"](?:.+)?(tabDetail\b)(?:.+)?['"]>[\d\D]+(<section.+>[\d\D]+<\/section>)/g
           let tabProgram = TagAll('div', 'id', 'tabProgram')
           let tabComment = TagAll('div', 'id', 'tabComment')
           let tab = [{tabDetail}, {tabProgram}, {tabComment}]


           let buy = TagAll('div', 'class', 'buyintro-buy')


            // 详情 tabDetail
            let Detail = function call() {
              let title = new RegExp('<p\\sclass="hr-under\\b[\\d\\D]+?<span\\sclass="">(.+)</span>','g')
              let txt =  Tagtxt('p', 'data-flag', 'normal')
              let img = Taghref('img','src')
              let origin = Taghref('img','data-origin')
              let preview = Taghref('img','data-preview')
              let previewH = Taghref('img','data-preview-height')
              let previewW = Taghref('img','data-preview-width')
              let large = Taghref('img','data-large')
              let largeH = Taghref('img','data-large-height')
              let largeW = Taghref('img','data-large-width')
              let OO = undefined
              let model = TagAll('section', 'class', 'album-model')
              let Num = 0

              // 返回当前 变量名 数组
              let CallArray  = BackArray(call)

              let modelArray = data.match(model)
              modelArray = modelArray.slice(0,3)
              let DetailData = JinPinData.tabDetail


              modelArray.forEach((itemData, indexData) => {
                // 定义 数组每项 为对象
                DetailData[indexData] = {}
                let DetailData = DetailData[indexData]
                if (CallArray) {
                  CallArray.forEach((arritem, arrindex) => {
                    let item = eval(arritem)
                    // 内容有多项 要保存为数组
                    if(arritem === 'txt'){
                      DetailData = {[arritem]:[]}
                      let DetailData = DetailData[indexData][arritem]
                      itemData.replace(item, (match, itemValue) => {
                        DetailData[arritem].push(itemValue)
                      })
                    } else {
                      itemData.replace(item, (match, itemValue) => {
                        Object.assign(DetailData, {[arritem]: itemValue})
                      })
                    }

                  })
                }
              })

                // Call.forEach((item, index) => {
                //     // 将字符串 转换为 变量名
                //     let reg = eval(item)
                //
                //     // tabDetail
                //     match.replace(reg, function (data, itemValue) {
                //       Object.assign(tabDetail, {[Call[index]]:itemValue})
                //     })
                //   })

            }

            // 执行 tabDetail
            Detail()



            // 精品页 头部 数据
            data.replace(top, function (match) {
           let Num = 0
           let tabNum = 0
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
           let arr = [title, href, id, img, subscribe, suburl, unsuburl, loginurl, priceOld, priceNew, othen, playNum, grade, tablink, top]

           arr.forEach((item, index) => {
             match.replace(item, function (data, item) {
               if (item === tablink) {
                 item[tabNum] = {}
                 let tab = item[tabNum]
                 Object.assign(top, {tab: item})
                 tabNum++
               } else {
                 tabNum = 0
               }
               Object.assign(top, {item})
             })
           })

         })



            // 购买
               data.replace(buy, function (match) {
                 // let btnBuy = TagAll('a', 'class', 'btn1')
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

                 let arr = [{lisBtn}, {albumid}, {category}, {dataDone}, {tag}, {event}, {role}, {xmlogSpy}, {xmlogId}, {xmlogMod}]
                 let buyData = JinPinData.buy
                 arr.forEach((item, index) => {
                   //  获取对象 key 转换为 字符串
                   let key = Object.keys(arr[index]).toString()
                   // 根据获取key 名 得到 vlaue 即 正则语法
                   let reg = arr[index][key]
                   // 匹配到的 value 保存
                   match.replace(reg, function (data, itemValue) {
                     Object.assign(buyData, {[key]: itemValue})
                   })
                 })
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
                resolve(JinPinData)

            }
        }
    })

    return  Prom
}

