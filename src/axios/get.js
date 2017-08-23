import axios from 'axios'

// https://bird.ioliu.cn/ 跨域代理网站

export  const getJson = () => {
   const url = 'http://m.ximalaya.com/tracks/47259950.json'

     return axios.get('http://bird.ioliu.cn/v1/?url=' + url)
}


export  const getHome = () => {
  const url = 'http://m.ximalaya.com'

  return axios.get('http://bird.ioliu.cn/v1/?url=' + url)
}
