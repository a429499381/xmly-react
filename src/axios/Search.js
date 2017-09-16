import {getHome, Search} from './get.js'

export  const SearchData = (id) => {
    var SearchData = {}
    SearchData.album = []
    let OK = 'No'
    let time = 'No'
    //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {

      Search(id).then((res) => {
          // 列表 标签
          // const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
          const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?href="(.+)">[\d\D]+?(<\/li\b>)/g
          const ImgSrc = /src\b="(.+)">/g
          const Playnums = /<span\sclass="mgr-5">(.+)<\/span>/g
          const Title = /<p\sclass="name\s.+\n\s+(?:<span\b\sclass="tag-pay.+">(.+)<\/span>)?\s+(.+)\s+<\/p>/g
          const Section_user = /<li\b.+data-url="(.+)">[\d\D]+?<div\b\s+class="pic.+?sound_id="(\d+)"\s+sound_url="(http.+)?"[\d\D]+?src="(http.+.jpg)"[\d\D]+?class="time-cont">(.+)<\/p>[\d\D]+?class="tit">(.+)<\/p>([\d\D]+?class="mgr-5"><i\b.+<\/i>(.+)<\/span>){1,3}/g
          const Section = /<p class="name\sellipsis">\s+(.+)\s+<\/p>[\d\D]+?<span\sclass="mgr-5">(.+)<\/span>/g

          window.data = res.data

          // 提取 列表 数据
        let PNum = 0
        let ImgNum = 0
        let TitleNum = 0
        res.data.replace(Lireg, function (match, Href) {
            // 提取 路由 地址
            SearchData.album.push({ Href })
            // 提取 标题 单条数据节目数量
            match.replace(Playnums, function (data,  PlayNum) {
             Object.assign(SearchData.album[PNum],{ PlayNum})
              PNum ++
              return OK = 'OK'
            })
            match.replace(ImgSrc, function (data, ImgSrc) {
              Object.assign(SearchData.album[ImgNum],{ ImgSrc})
              ImgNum ++
            })
            match.replace(Title, function (data, Title, Title1) {
              Object.assign(SearchData.album[TitleNum],{Title, Title1})
              console.log(Title, Title1)
              TitleNum ++
            })
          })


          // 打印 数据  验证
          window.HomeData = SearchData
          console.log('Search',SearchData)
        })

      time  = setInterval(Go,50)
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

