仿喜马拉雅

主要用到模块:
    create-react-app
    node 7.0.0
    react 15.6.0
    react-router 2.8.0
    antd 2.13.0
    axios 0.16.2
    sass  4.53

运行方法:
    复制  src目录下的  wepack.config.dev.js  到 node_modules/react-scripts/config 下， 否则样式丢失

    npm install  && npm start

编译:
    npm run build

编译后运行  与 5000 端口
    serve -s build

线上体验地址:
    http://www.fxdbs.cn:5000

数据获取方式：
    爬取喜马拉雅移动端网页，使用了跨域代理服务，避免请求被拒绝。
    // https://bird.ioliu.cn/ 跨域代理网站（免费）

    数据核心提取方式： /Users/xutao/web/xmly-react/src/data/Regex
        使用正则提取，速度非常快，有兴趣可以看看config.js 文件，所有提取
        都是基于里面代码不到30行。

🎵播放：
    解决移动端与pc端行为不一致的问题， 现在 移动端(andrios ios ipad）默认是在用户第一次交互前播放状态
    是无法改变的，包括时间， （但无法解决载入播放页面，用户不做任何触摸或交互自动播放问题。）

移动端兼容性问题：
    数据请求务必使用 https 否则ipad3 9.2.1中 chorme safari 均无法异步正确请求。


数据缓存：
     之前使用indexDB， 之后发现localStorage 也能满足需求，改用loalStorage.
