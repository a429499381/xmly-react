import axios from 'axios'

export  const get = () => {
   let url = 'http://m.ximalaya.com/tracks/47259950.json'
   let config = {
       GET:"/tracks/47259950.json HTTP/1.1",
    Host: "m.ximalaya.com",
    Connection: "keep-alive",
    Accept: "application/json, text/javascript, */*; q=0.01",
   }

   return axios.get(url, config)
}
