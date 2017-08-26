import {getHome} from './get.js'

export  const Data = () => {
    const HomeData = {}
    //  分类 数据提取
    getHome().then(res => {
        // 测试用 添加未经过处理数据与 window 全局变量中
        window.data = res.data
        // 分类 列表内容
        HomeData.Fl = {}
        // 专辑 列表内容
        HomeData.JzData = {}
        // 列表  内容
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
        const Section = /<section\b\sclass="module.?>[\d\D]+?<li\b\s.+>[\d\D]+?<\/section\b>/g
        const Section_href = /<li\b[\d\D]+?href="(.+)"[\d\D]+?\bdata-original\b="([^"']+)"[\d\D]+?<p class="name">(.+)<\/p>[^}]+?<p class="count-cont">.+<span>(.+)<\/span>/g
        const header = /<\bheader\b.+class="header1">[\d\D]+?<\/header\b>/g
        const header_href = /<a\b\sclass="btn\b\s\bbtn-more\b\sc02\sfr"\shref="(\/.+)(\/.+\/.+)?".+[\d\D]+?<\/i>(.+)<\/h2>/g
        const header_href1 = /<a\b\sclass="btn\b\s\bbtn-more\b\sc02\sfr"\shref="(\/([\w-]+)(?:\/([\w-]+))?(?:\/[\w-]+)?)">\s?([^';"<>]+)\s?<[\d\D]+?<\/i>(.+)<\/h2>/g

        // 获取 clas=item j-candies  分类  标签所有内容
        const category = /<div\s+class="list-category">[\d\D]+<\/div>[\r\n\s]+(?=<\/section>)/g
        const Lireg = /(?!<\/?li>)<li\b\s?class="item\s?[\d\D]+?(<\/li\b>)/g
        const data = /href\b="(\/.+\/(.+)(?:\/.+)?)"[\d\D]+?src="([^';"]+)(?=")/g

        // 获取 item item-2  专辑列表 标签所有内容
        const Lireg_2 = /(?!<\/?li>)<li\b\s?class="item\s+item-2"[\d\D]+?(<\/li\b>)/g


        // 获取 焦点 标签 所有内容 wrapper
        const wrapper = /(?!<\/?div>)<div\b\s?class="wrapper"[\d\D]+?(<\/div\b>)/g
        const banner = /(?!<\/?div>)<div\b\s?class="single-banner"[\d\D]+?(<\/div\b>)/g
        const list = /(?!<\/?li>)<li\b\s?class="item\s+item-r"[\d\D]+?(<\/li\b>)/g


        //  正则匹配 提取  分类数据
        res.data.replace(category, function (match) {
              match.replace(data, function (match, href, name, src) {
                 let Hrefs = {'href': href}
                 let Srcs = {'src': src}
                 let Names = {'name': name}
                // 合并 数据  与 rank  book .... 中
                HomeData.Fl[name] = Object.assign(Names, Hrefs, Srcs )
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

        res.data.replace(Section, function (match) {

            match.replace(header_href1, function (data, href, name1, name, more, title) {
                name ? name : name = name1
                HomeData.Lists[name] = {}
                HomeData.Lists[name].header = {}
                HomeData.Lists[name].header = {
                    'name': name,
                    'href': href,
                    'more': more,
                    'title': title
                }

            })
        })

        // res.data.replace(Section_href, function (match, href, img, title, num) {
        //     let hrefs = {"href": href}
        //     let imgs = {"img": img}
        //     let titles = {"title": title}
        //     let nums = {"num": num}
        //     let Section_List = Object.assign(titles, hrefs, imgs, nums)
        //     HomeData.Lists[Namess].List = Section_List
        // })

        // 打印 数据  验证
        window.HomeData = HomeData
        console.log(HomeData)
    })
    return HomeData
}

