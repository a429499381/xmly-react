import {GetId} from './get.js'

export  const DetailData = (id) => {
    var GetData = {}
    GetData.album = []
    let OK = 'No'
    let time = 'No'

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
                const jianjieJ = /<div\sclass="intro-breviary">[^><]+<\/div>/g
                const TitleJ = /<h3\sclass="sub-header">[^<>]+<\/h3>/g
                const ImgSrcJ = /src="([^';"]+)"/g
                // 提取所有 标签内的 内容
                const All  = /<[\d\D]+?>/g




                // 相关专辑提取
                const SectionX = /(?!<\/?section>)<section\b\s?class="mod\srelativeAlbum">[\d\D]+?(<\/section\b>)/g
                const HrefX = /<a\s.+href="([^<>"]+)"/g
                // 提取 播放量 可播放集数
                const PlayNumX = /<span.+<\/i>([^<>"]+)<\/span>\s+<span.+<\/i>([^<>"]+)<\/span>/g
                const TitleX = /<h4\b.+?([^><]+?)</g

                // 播放列表
                const LiregP = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
                const MetaP = /<meta[\d\D]+?content="([^';"<>]+)">/g
                const HrefP = /<a\s.+href="([^<>"]+)"/g
                const ImsrcP = /<a\s.+sound_url="([^<>"]+)".+sound_id="([^<>"]+)"/g
                const TitleP = /<h4\b.+?([^><]+?)</g

                 // 相关专辑提取
                 data.replace(SectionX, function (match) {
                     let NumH = 0
                     let NumP = 0
                     let NumT = 0
                     GetData.album.MoreAlbum = []
                     GetData.album.MoreAlbum[NumH] = {}
                     GetData.album.MoreAlbum[NumP] = {}
                     GetData.album.MoreAlbum[NumT] = {}
                     match.replace(HrefX, function (match, Href) {
                         GetData.album.MoreAlbum[NumH] = {Href}
                            NumH++
                     })

                     match.replace(TitleX, function (match, Title) {
                         Object.assign(GetData.album.MoreAlbum[NumT], {Title})
                            NumT++
                     })
                     match.replace(PlayNumX, function (match, PlayNUm, PlayTime) {
                         Object.assign(GetData.album.MoreAlbum[NumP], {PlayNUm, PlayTime})
                             NumP++
                     })
                 })

                // 提取 详情内容
                data.replace(SectionD, function (match) {
                    GetData.album.Detail= {}
                    let Detail = GetData.album.Detail
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



                // 播放列表
                data.replace(LiregP, function (match) {
                    let NumM = 0
                    let NumM1 = 0
                    let NumM2 = 0
                    let NumH = 0
                    let NumI = 0
                    let NumT = 0
                    GetData.album.Lists = []
                    let Detail = GetData.album.Lists
                    match.replace(MetaP, function (match, name) {
                        GetData.album.Lists[NumH] = {}
                        Object.assign(Detail[NumH], {name})
                        NumM++
                    })
                    match.replace(MetaP, function (match, time) {
                        Object.assign( Detail[NumM1], {time})
                        NumM1++
                    })
                    match.replace(MetaP, function (match, img) {
                        Object.assign( Detail[NumM2], {img})
                        NumM2++
                    })
                    match.replace(HrefP, function (match, Href) {
                        // Detail.push({Href})
                        Object.assign( Detail[NumH], {Href})
                        NumH++
                    })
                    match.replace(ImsrcP, function (match, ImgSrc) {
                        Object.assign( Detail[NumH], {ImgSrc})
                        NumI++
                    })
                    match.replace(TitleP, function (match, Title) {
                        Object.assign( Detail[NumT], {Title})
                        NumT++
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
              resolve(GetData.album)

          }
      }
    })

    return  Prom
}

