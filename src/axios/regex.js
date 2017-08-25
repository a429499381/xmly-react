import {getHome} from './get.js'

export  const Data = () => {
    const HomeData = {}
    //  分类 数据提取
    getHome().then(res => {
        // 测试用 添加未经过处理数据与 window 全局变量中
        window.data = res.data
        // 分类 列表内容
        HomeData.Fl = {}
        // 焦点 标签 列表
        HomeData.Jd = {}
        // 专辑 列表内容
        HomeData.JzData = {}
        // 列表 头部 内容
        HomeData.Lists = {}

        // 所有列表匹配简单模式
        const lists = /(?!<\/?li>)<li\b[\d\D]+?(<\/li\b>)/g
        const hearder = /<\bheader\b.+class="header1">[\d\D]+?<\/header\b>/g
        const Hrefreg = /href="([^"';]+)(?=")/g
        const Srcreg = /src="([^"';]+)(?=")/g
        const Data_original = /data-original="([^"';]+)(?=")/g
        const Lireg_p = /<p\sclass="name">(.+)<\/p>/g
        // 获取 href 标签名字
        const name =   /\/(\w+)"/
        const text_span = /<span\b.+?>(.+)<\/span>/g

        // 测试 标签
        const Section = /(?!<\/?section>)<section\b\s?class=".+?"[\d\D]+?<\/section\b>/g
        const header = /<\bheader\b.+class="header1">[\d\D]+?<\/header\b>/g
        const header_href = /\bhref\b="(\/.+?\/(.+?)\/.+?)">(.+?)\s+<[\d\D]+?<\/i>(.+?)<\/h2>(?!<\/?header\b)/g
        const Section_href = /<li\b[\d\D]+?href="(.+)"[\d\D]+?\bdata-original\b="([^"']+)"[\d\D]+?<p class="name">(.+)<\/p>[^}]+?<p class="count-cont">.+<span>(.+)<\/span>/g

      // 获取 clas=item j-candies  分类  标签所有内容
        const Lireg = /(?!<\/?li>)<li\b\s?class="item\s+j-candies"[\d\D]+?(<\/li\b>)/g

        // 获取 item item-2  专辑列表 标签所有内容
        const Lireg_2 = /(?!<\/?li>)<li\b\s?class="item\s+item-2"[\d\D]+?(<\/li\b>)/g


        // 获取 焦点 标签 所有内容 wrapper
        const wrapper = /(?!<\/?div>)<div\b\s?class="wrapper"[\d\D]+?(<\/div\b>)/g
        const banner = /(?!<\/?div>)<div\b\s?class="single-banner"[\d\D]+?(<\/div\b>)/g
        const list = /(?!<\/?li>)<li\b\s?class="item\s+item-r"[\d\D]+?(<\/li\b>)/g


        //  正则匹配  循环 添加 数据 与  HomeData 分类对象中
        res.data.replace(Lireg, function (match, groun1, groun2, index, origin) {
            // 缓存 每次匹配到的 LI  标签内容
            let data = match
            // 定义 局部 临时变量  作为 回掉 内容变量传递。
            let  Lname = 'No'


            //  正则 匹配 li 标签里面到 名字 rank book ...
            data.replace(name, function (match, name) {
                Lname = name
                // 建立每个 名字的数字  rank[] book[]
                HomeData.Fl[name] =  []
                // 添加数组内容
                HomeData.Fl[name].push(name)
            })
            data.replace(Hrefreg, function (match, href) {
                // 添加数组内容 href 标签
                HomeData.Fl[Lname].push(href)

            })
            data.replace(Srcreg, function (match, Src) {
                // 添加数组内容 Src 标签
                HomeData.Fl[Lname].push(Src)

            })
        })

        // 正则匹配  循环 添加 数据 与  HomeData 专辑 对象中
        var  Num = 0
        res.data.replace(Lireg_2, function (match, groun1, groun2, index, origin) {
            // 缓存 每次匹配到的 LI  标签内容
            let data = match
            // 定义 局部 临时变量  作为 回掉 内容变量传递。
            let  Lname = 'No'
            HomeData.JzData[Num] = {}

            data.replace(Hrefreg, function (match, href) {
                HomeData.JzData = {"href": href,}
            })

            data.replace(Data_original, function (match, data) {
                HomeData.JzData = {"data": data}
            })

            // //  正则 匹配 li 标签里面到 名字 rank book ...
            // data.replace(Lireg_p, function (match, name) {
            //     HomeData.JzData[Num].push(name)
            // })
            Num = Num + 1
        })

        // 获取 header 标签内容 提取数据
        // var Num2 = 0
        res.data.replace(Section, function (match, groun1, groun2, index, origin) {
            // 缓存 每次匹配到的 LI  标签内容
            let data = match
            const Lists = HomeData.Lists

            data.replace(header, function (data2) {
              data2.replace(header_href, function (match, href, name, more, title) {
                let Num2 = 0
                HomeData.Lists[name] = {}
                HomeData.Lists[name].Header = {}
                HomeData.Lists[name].List = {}

                let names = {"name": name}
                let titles = {"title": title}
                let hrefs = {"href": href}
                let mores = {"more": more}

                let  headers = Object.assign(names, titles, hrefs, mores)
                HomeData.Lists[name].Header = headers

                // HomeData.Lists[name].Header.push(name,title,href,more)

                  data.replace(Section_href, function (match, href, img, title, num) {
                      let hrefs = {"href": href}
                      let imgs = {"img": img}
                      let titles = {"title": title}
                      let nums = {"num": num}
                      let Section_List = Object.assign(titles, hrefs, imgs, nums)
                      HomeData.Lists[name].List = Section_List
                  })
              })
            })
        })
        // 打印 数据  验证
        window.HomeData = HomeData
        console.log(HomeData)
    })
    return HomeData
}

