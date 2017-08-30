import axios from 'axios'

import * as code from './config'
// https://bird.ioliu.cn/ 跨域代理网站

export  const getJson = () => {
   const url = 'http://m.ximalaya.com/tracks/47259950.json'

     return axios.get(code.CODEURL + url)
}


export  const getHome = () => {
  const url = 'http://m.ximalaya.com'

  return axios.get(code.CODEURL + url)
}
