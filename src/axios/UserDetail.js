import {GetId} from './get.js'

export  const UserDetailData = (id) => {
    var GetData = {}
    GetData.album = []
    GetData.album.Lists = []
    let OK = 'No'
    let time = 'No'
    var N = 0


  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {
      let albumId = id + '/albums'

     GetId(id).then((res) => {
                let data = res.data
                // 列表 标签

                // 提取 详情 主播介绍
                const SectionD = /(?!<\/?section>)<section\b\s?class="anchor-info"[\d\D]+?(<\/section\b>)/g
                const ImgD = /<img\b.+?src="([^><"]+?)"/g
                const IntroD = /<p\b.+?([^><]+?)<\/p>/g
                const nameD = /<p\sclass="name">([^<>]+)</g
                const btnD = /<span\b.+?([^><]+?)<\/span>/g

                // 播放列表
                const OlP = /<ul>[\d\D]+?<\/ul>/
                const LiregP = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
                const HrefP = /<a\s.+href="([^<;'>"]+)">([^<>]+?)[\d\D]+?<\/a>/g
                const txtP = /<a\b.+?([^><]+?)<\/a>/g
                const Play = /<a\s.+sound_url=["']([^<>";']+)["']/g

                // 提取 主播内容介绍
                data.replace(SectionD, function (match) {
                    GetData.album.Num= {}
                    let Detail = GetData.album.Num

                    match.replace(ImgD, function (match, Img) {
                        Object.assign(Detail, {Img})
                    })
                    match.replace(IntroD, function (match, Intro) {
                        Object.assign(Detail, {Intro})
                    })
                    match.replace(btnD, function (match, btn) {
                        Object.assign(Detail, {btn})
                    })
                    match.replace(nameD, function (match, name) {
                        Object.assign(Detail, {name})
                    })
                    return OK ='OK'
                })

                // 播放列表
                data.replace(OlP, function (match) {
                  let NumH = 0
                  let NumP = 0


                  match.replace(LiregP, function (match) {

                    match.replace(Play, function (match, play) {
                      GetData.album.Lists[NumP] = {}
                      Object.assign( GetData.album.Lists[NumP], {play})
                      NumP++
                    })
                    match.replace(HrefP, function (match, href) {
                      Object.assign( GetData.album.Lists[NumH], {href})
                      match.replace(txtP, function (match, txt) {
                        Object.assign(GetData.album.Lists[NumH], {txt})
                      })
                      NumH++
                    })

                    return OK = 'OK'
                  })

                })
        })

     GetId(albumId).then((res) => {
       let data = res.data
       // 相关专辑提取
       const SectionX = /<ul\sclass="list-album">[\d\D]+<\/ul>/g
       const HrefX = /<a.+href="([^<>"]+)">/g
       const Imgx = /<img\b.+?src="([^><"]+?)"/g
       const name = /<p\sclass="name">([^><]+?)<\/p>/
       const cont = /<p\sclass="cont">([^><]+?)<\/p>/

       // 相关专辑提取
       data.replace(SectionX, function (match) {
         let N = 0
         GetData.album.albums = []
         match.replace(HrefX, function (data, href) {
           GetData.album.albums[N] = {}
           Object.assign(GetData.album.albums[N],{href})

           match.replace(Imgx, function (data, img) {
             Object.assign(GetData.album.albums[N],{img})
           })
           match.replace(name, function (data, name) {
             Object.assign(GetData.album.albums[N],{name})
           })
           match.replace(cont, function (data, cont) {
             Object.assign(GetData.album.albums[N],{cont})

           })
           N++
         })


         return OK ='OK'
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
                        resolve(GetData.album)

                    }
                }
    })

    return  Prom
}

