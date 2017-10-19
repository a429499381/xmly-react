const http = require('http')
const homePge = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>node  部署上线(随时失效)</title>
</head>
<body>
<ul>
    <li><a href="/a" target='_blank'>node 电影网站</a></li>
    <li><a href="/b" target='_blank'>node 狗狗说 app 后台</a></li>
    <li><a href="/c" target='_blank'>node 微信小程序后台</a></li>
    <li><a href="/d" target='_blank'>node 微信公众号后台</a></li>
</ul>
</body>
</html>
`
http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(homePge)
})
.listen(4000, () => {
    console.log('服务器启动在 4000')
})