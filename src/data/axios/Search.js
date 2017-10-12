import {getHome, Search} from './get.js'

export  const SearchData = (id,more) => {
    var SearchData = {}
    SearchData.album = []
    let OK = 'No'
    let time = 'No'

  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {

        if (!more) {
            Search(id).then((res) => {
                // 列表 标签
                // const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
                const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?href="(.+)">[\d\D]+?(<\/li\b>)/g
                const ImgSrc = /src\b="(.+)">/g
                const Playnums = /<span\sclass="mgr-5">(.+)<\/span>/g
                const Title = /<p\sclass="name\s[\d\D]+?(<span\b\sclass="tag-pay.+">(.+)<\/span>)?\s+(.+)\s+<\/p>/g


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
        if(more){
            let albums = `${id}/album`
            let user = `${id}/user`
            let voice = `${id}/voice`

            Search(albums).then((res) => {
                const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?href="(.+)">[\d\D]+?(<\/li\b>)/g
                const ImgSrc = /src\b="(.+)">/g
                const Playnums = /(?:<span\sclass="mgr-5">([^><]+)<\/span>)/g
                const Title = /<p\sclass="name\s[\d\D]+?(<span\b\sclass="tag-pay.+">(.+)<\/span>)?\s+(.+)\s+<\/p>/g


                // 提取 列表 数据
                let PNum = 0
                let ImgNum = 0
                let TitleNum = 0
              res.data.replace(Lireg, function (match, Href) {
                    // 提取 路由 地址
                    SearchData.album.push({ Href })
                    // 提取 标题 单条数据节目数量
                    match.replace(Playnums, function (data,  PlayNum ) {
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
                        // return OK = 'OK'
                    })
                })


            })
            Search(user).then((res) => {
            // 列表 标签
            // const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
            const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?href="(.+)">[\d\D]+?(<\/li\b>)/g
            const ImgSrc = /src\b="(.+)">/g
            const Playnums = /(?:<span\sclass="mgr-5">([^><]+)<\/span>){2}/g
            const Title = /<p\sclass="name\s[\d\D]+?(<span\b\sclass="tag-pay.+">(.+)<\/span>)?\s+(.+)\s+<\/p>/g


            // 提取 列表 数据
            let PNum = 0
            let ImgNum = 0
            let TitleNum = 0
            SearchData.user = []
            res.data.replace(Lireg, function (match, Href) {
              // 提取 路由 地址
              SearchData.user.push({ Href })
              // 提取 标题 单条数据节目数量
              match.replace(Playnums, function (data,  PlayNum, PlayNum1 ) {
                Object.assign(SearchData.user[PNum],{ PlayNum, PlayNum1})
                PNum ++
              })
              match.replace(ImgSrc, function (data, ImgSrc) {
                Object.assign(SearchData.user[ImgNum],{ ImgSrc})
                ImgNum ++
              })
              match.replace(Title, function (data, Title0,Title2, Title1) {
                let Title = Title2 ? Title2 : ''
                Object.assign(SearchData.user[TitleNum],{Title, Title1})
                TitleNum ++
                // return OK = 'OK'
              })
            })


          })
            Search(voice).then(res => {
            const Section_user = /<li\b.+data-url="(.+)">[\d\D]+?<div\b\s+class="pic.+?sound_id="(\d+)"\s+sound_url="(http.+)?"[\d\D]+?src="(http.+.jpg)"[\d\D]+?class="time-cont">([^<>]+)<\/p>[\d\D]+?class="tit">([^<>]+)<\/p>(?:[\d\D]+?class="mgr-5"><i\b.+<\/i>(.+)<\/span>){3}/g
            SearchData.voice = []
            res.data.replace(Section_user, function (match, Href, SoundId, SoundUrl, ImgSrc, TimeCont, Title,  Sms, Mgr) {
              SearchData.voice.push({Href, SoundId, SoundUrl, ImgSrc, TimeCont, Title,  Sms, Mgr})
              return OK = 'OK'
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

