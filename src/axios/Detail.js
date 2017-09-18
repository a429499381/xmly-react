import {GetId} from './get.js'

export  const SearchData = (id,more) => {
    var GetData = {}
    GetData.album = []
    let OK = 'No'
    let time = 'No'

  //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {


            GetId(id).then((res) => {
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

