import {GetId} from './get.js'
import {TagAll, Taghref, Tagtxt} from '../Regex/config'

export const UserDetailData = (id) => {
  var GetData = {}

  //  分类 数据提取
  const Prom = new Promise((resolve, reject) => {
    let OK = 'No'
    let time = 'No'
    let timeover = function () {
      // 5秒后退出 定时
      time = setInterval(Go, 100)
      setTimeout(function () {
        clearInterval(time)
      }, 5000)

      function Go() {
        if (OK === 'OK') {
          clearInterval(time)
          resolve(GetData)
        }
      }
    }

    GetId(id).then((res) => {
      let data = res.data
      let play = function () {
        GetData.play = {}
        let play = GetData.play

        // 提取 详情 主播介绍
        const title = Tagtxt('h2', 'class', 'title')
        const playpanel = TagAll('section', 'class', 'palypanel')
        const ImgD = Taghref('img', 'src')
        const soundId = Taghref('div', 'sound_id',)
        const zhubo = TagAll('h4', 'class', 'hostNam')
        const zhubop = Tagtxt('span')
        const time = Tagtxt('span', 'class', 'time fr')

        // 提取 主播内容介绍
        data.replace(title, function (match, title) {
          Object.assign(play, {title})
        })
        data.replace(playpanel, function (match) {
          match.replace(ImgD, function (match, Img) {
            Object.assign(play, {Img})
          })
          match.replace(time, function (match, time) {
            Object.assign(play, {time})
          })
          match.replace(zhubo, function (data) {
            data.replace(zhubop, function (data1, zhubo) {
              Object.assign(play, {zhubo})
            })
          })

        })
      }
      let blum = function () {
        GetData.blum = {}
        let blum = GetData.blum

        // 所属专辑
        const blumk = TagAll('section', 'class', 'pl-part', 'g')
        const url = Taghref('div', 'data-url')
        const plSubtit = Tagtxt('h2', 'class', 'pl-subtit')
        const img = Taghref('img', 'src')
        const title = Tagtxt('h3', 'class', 'name elli-multi-1')
        const info = Tagtxt('p', 'class', 'info-intro')

        data.replace(blumk, function (match) {
          match.replace(url, function (data, url) {
            Object.assign(blum, {url})
          })
          match.replace(plSubtit, function (data, subtit) {
            Object.assign(blum, {subtit})
          })
          match.replace(title, function (data, title) {
            Object.assign(blum, {title})
          })
          match.replace(info, function (data, info) {
            Object.assign(blum, {info})
          })
        })

      }
      let lists = function () {
        // 播放列表
        const ol = TagAll('ol', 'class', 'mod list-t1')
        const li = TagAll('li', 'class', 'item-block trackItem')
        const title = Tagtxt('h4', 'class', 'item-tit')
        const href = Taghref('a', 'href')


        // 播放列表
        data.replace(ol, function (match) {
          GetData.lists = []
          let Num = 0

          match.replace(li, function (data) {
            GetData.lists[Num] = {}
            let list = GetData.lists[Num]
            data.replace(title, function (data, title) {
              Object.assign(list, {title})
            })
            data.replace(href, function (data, href) {
              let hrefS = href.slice(21)
              Object.assign(list, {'href':hrefS})
            })
            Num++
          })
          setTimeout(function () {
            return OK = 'OK'
          }, 0)
        })
      }

      play()
      blum()
      lists()
    })

    timeover()
  })

  return Prom
}

