import {GetId} from './get.js'
import {TagAll, Tagtxt, Taghref} from '../Regex/config'

export  const albumData = (id) => {
    var GetData = {}
    GetData.album = []
    GetData.album.Lists = []
    let OK = 'No'
    let time = 'No'
    var N = 0


  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {


     GetId(id).then((res) => {
                let data = res.data
                // 列表 标签

                // 提取 详情 主播介绍
                const SectionD = /(?!<\/?section>)<section\b\s?class="mod\suserInfo?[\d\D]+?(<\/section\b>)/g
                const TitleD = /<h3\sclass="sub-header">([^<>]+)<\/h3>/g
                const HrefD = /<a\s.+href="([^<>"]+)"/g
                const ImgD = /<img\b.+?src="([^><"]+?)"/g
                const IntroD = /<p\b.+?([^><]+?)<\/p>/g
                const nameD = /<h4\b.+?([^><]+?)</g
                const TxtD = /<div\sclass="intro-breviary\sj-zintro">([^><]+?)</g
                const TxtFullD = /<div\sclass="intro-full\sj-zintro\suserIntro">([^><]+?)</g

                // 内容简介
                const SectionJ = /(?!<\/?section>)<section\b\s?class="mod">[\d\D]+?(<\/section\b>)/g
                // const jianjieJ = /<div\sclass="intro-breviary">[^><]+<\/div>/g
                const TitleJ = /<h3\sclass="sub-header">([^<>]+?)<\/h3>/g
                const ImgSrcJ = /src="([^';"]+)"/g
                const IntroJ = /<p\b.+?([^><]+?)<\/p>/g
                // 提取所有 标签内的 内容
                const All  = /<[\d\D]+?>/g




                // 相关专辑提取
                const SectionX = /(?!<\/?section>)<section\b\s?class="mod\srelativeAlbum">[\d\D]+?(<\/section\b>)/g
                const HrefX = /<a\s.+href="([^<>"]+)"/g
                // 提取 播放量 可播放集数
                const PlayNumX = /<span.+<\/i>([^<>"]+)<\/span>\s+<span.+<\/i>([^<>"]+)<\/span>/g
                const TitleX = /<h4\b.+?([^><]+?)</g

                // 播放列表
                const OlP = /(?!<\/?ol>)<ol\b\s?class="mod\b.+>[\d\D]+?(<\/ol\b>)/g
                const LiregP = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
                const MetaP = /<meta[\d\D]+?content="([^';"<>]+)">/g
                const HrefP = /<a\s.+href="([^<>"]+)"/g
                const Play = /<a\s.+sound_url=["']([^<>";']+)["'].+sound_id=["']([^<>";']+)["']/g
                const TitleP = /<h4\b.+?([^><]+?)</g


                 // 相关专辑提取
                 data.replace(SectionX, function (match) {
                     let img = Taghref('img', 'src')
                     let NumH = 0
                     let NumP = 0
                     let NumT = 0
                     let NumI = 0
                     GetData.album.Album = []
                     GetData.album.Album[NumH] = {}
                     GetData.album.Album[NumP] = {}
                     GetData.album.Album[NumT] = {}
                     GetData.album.Album[NumI] = {}
                     match.replace(HrefX, function (match, Href) {
                         GetData.album.Album[NumH] = {Href}
                            NumH++
                     })
                     match.replace(img, function (match, img) {
                         GetData.album.Album[NumI] = {img}
                         NumI++
                     })

                     match.replace(TitleX, function (match, Title) {
                         Object.assign(GetData.album.Album[NumT], {Title})
                            NumT++
                     })
                     match.replace(PlayNumX, function (match, playNum, playTime) {
                         Object.assign(GetData.album.Album[NumP], {playNum, playTime})
                             NumP++
                     })
                 })

                // 提取 详情内容
                data.replace(SectionD, function (match) {
                    GetData.album.header= {}
                    let Detail = GetData.album.header
                    match.replace(TitleD, function (match, Title) {
                        Object.assign(Detail,{Title})
                    })
                    match.replace(HrefD, function (match, Href) {
                        Object.assign(Detail, {Href})
                    })
                    match.replace(ImgD, function (match, Img) {
                        Object.assign(Detail, {Img})
                    })
                    match.replace(IntroD, function (match, Intro) {
                        Object.assign(Detail, {Intro})
                    })
                    match.replace(TxtD, function (match, Txt) {
                        Object.assign(Detail, {Txt})
                    })
                    match.replace(TxtFullD, function (match, TxtFull) {
                        Object.assign(Detail, {TxtFull})
                    })
                    match.replace(nameD, function (match, name) {
                        Object.assign(Detail, {name})
                    })
                    return OK ='OK'
                })

                // 提取 内容简介
                data.replace(SectionJ, function (match) {
                  GetData.album.Txt= {}
                  match.replace(TitleJ, function (data, title) {
                     Object.assign(GetData.album.Txt, {title})
                  })
                  match.replace(ImgSrcJ, function (data, img) {
                    Object.assign(GetData.album.Txt, {img})
                  })
                  match.replace(IntroJ, function (data, intro) {
                    Object.assign(GetData.album.Txt, {intro})
                  })
                })



                // 播放列表
                data.replace(OlP, function (match) {
                  let NumM = 0
                  let NumH = 0
                  let NumP = 0
                  let NumT = 0

                  // 测试用
                  window.data = match
                  // 测试用

                  match.replace(LiregP, function (match) {

                    match.replace(MetaP, function (match, name ) {
                      let Name = ['name', 'time', 'img', 'type']
                      let Num = Name[NumM]

                      if (!GetData.album.Lists[N]) {
                        GetData.album.Lists[N] = {}
                      }
                      Object.assign(GetData.album.Lists[N], {[Num]: name})

                      NumM++
                      if (NumM === Name.length){
                        N++
                        NumM = 0
                      }

                    })
                    match.replace(Play, function (match, play, id) {
                      Object.assign( GetData.album.Lists[NumP], {play, id})
                      NumP++
                    })
                    match.replace(HrefP, function (match, href) {
                      Object.assign( GetData.album.Lists[NumH], {href})
                      NumH++
                    })
                    match.replace(TitleP, function (match, Title) {
                      Object.assign( GetData.album.Lists[NumT], {Title})
                      NumT++
                    })

                    return OK = 'OK'
                  })

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

