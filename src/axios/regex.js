import {getHome} from './get.js'

export  const Data = () => {
    const HomeData = {}
    //  分类 数据提取
    getHome().then(res => {
        // 测试用 添加未经过处理数据与 window 全局变量中
        window.data = res.data
        // 分类 列表内容
        HomeData.Fl = {}
        HomeData.Jd = {}
        // 专辑 列表内容
        HomeData.JzData = {}

        // 获取 clas=item j-candies  分类  标签所有内容
        const Lireg = /(?!<\/?li>)<li\b\s?class="item\s+j-candies"[\d\D]+?(<\/li\b>)/g

        // 获取 item item-2  专辑列表 标签所有内容
        const Lireg_2 = /(?!<\/?li>)<li\b\s?class="item\s+item-2"[\d\D]+?(<\/li\b>)/g
        // 获取  p 标签 内容
        const Lireg_p = /<p\sclass="name">(.+)<\/p>/g

        // 获取 焦点 标签 所有内容 wrapper


        // 获取 href 标签名字
        const name =   /\/(\w+)"/
        // 获取 a 标签的跳转路由
        const Hrefreg = /href="([^"';]+)(?=")/g
        const Srcreg = /src="([^"';]+)(?=")/g
        const Data_original = /data-original="([^"';]+)(?=")/g

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
            HomeData.JzData[Num] = []

            data.replace(Hrefreg, function (match, href) {
                HomeData.JzData[Num].push(href)
            })

            data.replace(Data_original, function (match, data) {
                HomeData.JzData[Num].push(data)
            })

            //  正则 匹配 li 标签里面到 名字 rank book ...
            data.replace(Lireg_p, function (match, name) {
                HomeData.JzData[Num].push(name)
            })
            Num = Num + 1
        })

        res.data.replace(Lireg_2, function (match, groun1, groun2, index, origin) {
            // 缓存 每次匹配到的 LI  标签内容
            let data = match
            // 定义 局部 临时变量  作为 回掉 内容变量传递。
            let  Lname = 'No'
            HomeData.JzData[Num] = []

            data.replace(Hrefreg, function (match, href) {
                HomeData.JzData[Num].push(href)
            })

            data.replace(Data_original, function (match, data) {
                HomeData.JzData[Num].push(data)
            })

            //  正则 匹配 li 标签里面到 名字 rank book ...
            data.replace(Lireg_p, function (match, name) {
                HomeData.JzData[Num].push(name)
            })
            Num = Num + 1
        })
        // 打印 数据  验证
        console.log(HomeData)
    })
    return HomeData
}

