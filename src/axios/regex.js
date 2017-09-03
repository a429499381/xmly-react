import {getHome} from './get.js'

export  const Data = () => {
    var HomeData = {}
    let OK = 'No'
    let time = 'No'
    //  分类 数据提取

    var Prom = new Promise((resolve, reject) => {

      getHome().then((res) => {

          // 测试用 添加未经过处理数据与 window 全局变量中
          window.data = res.data
          // 分类 列表内容
          HomeData.Fl = []
          // banner 图数据
          HomeData.banner = {}
          // 列表  内容
          HomeData.Lists = []
          // 个人电台 内容
          HomeData.zhibo = []


          // 列表 标签
          const Section = /<section\b\sclass="module.?>[\d\D]+?<li\b\s.+>[\d\D]+?<\/section\b>/g
          const Section_href = /<li\b[\d\D]+?href="(.+)"[\d\D]+?\bdata-original\b="([^"']+)"[\d\D]+?<p class="name">(.+)<\/p>(?:[\r\n\s]+<p.+<span>(\d+)<\/span\b>)?/g
          const header_href = /<a\b\sclass="btn\b\s\bbtn-more\b\sc02\sfr"\shref="(\/([\w-]+)(?:\/([\w-]+))?(?:\/[\w-]+)?)">\s?([^';"<>]+)\s?<[\d\D]+?<\/i>(.+)<\/h2>/g

          // 获取 clas=item j-candies  分类  标签所有内容
          const category = /<div\s+class="list-category">[\d\D]+<\/div>[\r\n\s]+(?=<\/section>)/g
          const data = /href\b="(\/.+\/(.+)(?:\/.+)?)"[\d\D]+?src="([^';"]+)(?=")/g

          // 完美匹配 li 标签的模板， 留存参考
          const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g

          // 获取 焦点 标签 banner 数据
          const banner = /<div\b\s?class="single-banner"[\d\D]+?href="(.+)"[\d\D]+?\bdata-original\b="([^";']+)"[\d\D]+?<p class="name">(.+)<\/p>/g

          // 个人电台 数据
          const zhibo  = /<section\sclass="module\sno-bg">[\d\D]+?<\/section>(?!<section\b>)/g
          const zhibo_data = /<a\s.+?href="([^';"]+)".+?>(.+)<\/span>/g

          //  正则匹配 提取  分类数据
          res.data.replace(category, function (match) {
            match.replace(data, function (match, href, name, src) {
              // 合并 数据  与 rank  book .... 中
              HomeData.Fl.push ({'href': href, 'src': src, 'name': name})
            })
          })

          // 个人电台 正则 提取 数据
          res.data.replace(zhibo, function (match) {
            match.replace(zhibo_data, function (data, href, txt) {
              HomeData.zhibo.push({'href': href, 'txt': txt})
            })
          })

          // 正则匹配 焦点 banner 数据
          res.data.replace(banner, function (match, href, src, txt) {
            HomeData.banner = {
              'href': href,
              'src': src,
              'txt': txt
            }
          })

          // 提取 列表 数据
          let Num = 0
          res.data.replace(Section, function (match) {
            let Data = match
            let Name = 'No'

            // 列表 header 数据提取
            Data.replace(header_href, function (data1, href, name1, name, more, title) {
              name ? name : name = name1
              Name = name
              HomeData.Lists[Num] = []
              HomeData.Lists[Num].push({
                'name': name, 'href': href, 'title': title, 'more': more, 'num': Num
              })

              })

            // 列表正文 内容 数据提取
            Data.replace(Section_href, function (data, href, src, txt, num ) {
              // HomeData.Lists[Name].list[Num] = {}
              HomeData.Lists[Num].push({
                'href': href,
                'src': src,
                'txt': txt,
                'num': num
              })
                return OK = 'OK'
            })
             Num = Num + 1
          })


          // 打印 数据  验证
          // window.HomeData = HomeData
          // console.log('reg',HomeData)
        })

      time  = setInterval(Go,50)
      function Go() {
          if (OK === 'OK') {
              resolve(HomeData)
              clearInterval(time)
          }
      }
    })

    return  Prom
}

