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
                const SectionX = /(?!<\/?section>)<section class="mod relativ.album">[\d\D]+?(<\/section\b>)/g
                const HrefX = /<a\s.+href="([^<>"]+)"/g
                // 提取 播放量 可播放集数
                const PlayNumX = /(?:<span.+<\/i>([^<>"]+)<\/span>){1}/g
                const TitleX = /<h4\b.+?([^><]+?)</g

                // 播放列表
                const LiregP = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
                const MetaP = /<meta[\d\D]+?content="([^';"<>]+)">\s\n/g
                const HrefP = /<a\s.+href="([^<>"]+)"/g
                const ImsrcP = /<a\s.+sound_url="([^<>"]+)".+sound_id="([^<>"]+)"/g
                const TitleP = /<h4\b.+?([^><]+?)</g

                // 提取 详情内容
                let NumZ = 0
                data.replace(SectionD, function (match) {
                    let Detail = GetData.album
                    match.replace(TitleD, function (match, Title) {
                        GetData.album.push = {Title}
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

                    NumZ++
                })

                // 相关专辑提取
                data.replace(SectionX, function (match) {
                    GetData.album.MoreAlbum = []
                    let Detail = GetData.album.MoreAlbum
                    match.replace(HrefX, function (match, Href) {
                        Detail.push({Href})
                    })
                    match.replace(PlayNumX, function (match, PlayNUm, PlayTime) {
                        Detail.push({PlayNUm, PlayTime})
                    })
                    match.replace(TitleX, function (match, Title) {
                        Detail.push({Title})
                    })
                })

                // 播放列表
                data.replace(LiregP, function (match) {
                    GetData.album.Lists = []
                    let Detail = GetData.album.Lists
                    match.replace(MetaP, function (match, num1, num2 ,num3, num4) {
                        Detail.push({num1, num2 ,num3, num4})
                    })
                    match.replace(HrefP, function (match, Href) {
                        Detail.push({Href})
                    })
                    match.replace(ImsrcP, function (match, ImgSrc) {
                        Detail.push({ImgSrc})
                    })
                    match.replace(TitleP, function (match, Title) {
                        Detail.push({Title})
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

