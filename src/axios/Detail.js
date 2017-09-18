import {getHome, Search} from './get.js'

export  const SearchData = (id,more) => {
    var GetData = {}
    GetData.album = []
    let OK = 'No'
    let time = 'No'

  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {


            Search(id).then((res) => {
                // 列表 标签
                // const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
                const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?href="(.+)">[\d\D]+?(<\/li\b>)/g
                const Title = /<h2\b.+?([^><]+?)<\/h2>/g
                const Img = /<img\b.+?src="([^><"]+?)"/g
                const href = /<a\sclass="c-link\snickname"\shref="([^><"]+?)"[^><]+>([^><]+)<\/a>/g
                const PlayNum = /<p\sclass="elli\splayCount".+[^><]<\/p>/g


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
                    })
                    match.replace(ImgSrc, function (data, ImgSrc) {
                        Object.assign(SearchData.album[ImgNum],{ ImgSrc})
                        ImgNum ++
                    })
                    match.replace(Title, function (data, Title0,Title2, Title1) {
                        let Title = Title2 ? Title2 : ''
                        Object.assign(SearchData.album[TitleNum],{Title, Title1})
                        TitleNum ++

                        return OK = 'OK'
                    })
                })

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

