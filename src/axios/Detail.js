import {GetId} from './get.js'

export  const DetailData = (id) => {
    var GetData = {}
    GetData.album = {}
    let OK = 'No'
    let time = 'No'

  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {


     GetId(id).then((res) => {
                let data = res.data
                // 列表 标签

                // 提取 详情内容
                const SectionD = /(?!<\/?section>)<section\b\s?class="mod\suserInfo?[\d\D]+?(<\/section\b>)/g
                const jianjieD = /<div\sclass="intro-breviary">[^><]+<\/div>/g
                const TitleD = /<h3\sclass="sub-header">[^<>]+<\/h3>/g
                const HrefD = /<a\s.+href="([^<>"]+)"/g
                const ImgD = /<img\b.+?src="([^><"]+?)"/g
                const IntroD = /<p\b.+?([^><]+?)<\/p>/g
                const nameD = /<h4\b.+?([^><]+?)</g
                const TxtD = /<div\sclass="intro-breviary\sj-zintro">([^><]+?)</g
                const TxtFullD = /<div\sclass="intro-full\sj-zintro\suserIntro">([^><]+?)</g


                // 相关专辑提取
                const SectionX = /(?!<\/?section>)<section class="mod relativeAlbum">[\d\D]+?(<\/section\b>)/g
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
                data.replace(SectionD, function (match) {
                    GetData.album.Detail = []
                    let Detail = GetData.album.Detail
                    match.replace(jianjieD, function (match, Txt) {
                        Detail.push({Txt})
                    })
                    match.replace(jianjieD, function (match, Title) {
                        Detail.album.push({Title})
                    })
                    match.replace(jianjieD, function (match, Href) {
                        Detail.album.push({Href})
                    })
                    match.replace(jianjieD, function (match, Img) {
                        Detail.album.push({Img})
                    })
                    match.replace(jianjieD, function (match, IntroD) {
                        Detail.album.push({IntroD})
                    })
                    match.replace(jianjieD, function (match, Txt1) {
                        Detail.album.push({Txt1})
                    })
                    match.replace(jianjieD, function (match, TxtFullD) {
                        Detail.album.push({TxtFullD})
                    })
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

