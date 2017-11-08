import {getJson} from '../axios/get'

export const soundQuanJson = function(url) {
    // let hot = 'http://m.ximalaya.com/explore/more_track?page=1&per_page=10&category_id=10&condition=hot'
    // let favorite = 'http://m.ximalaya.com/explore/more_track?page=1&per_page=10&category_id=10&condition=favorite'

    return new Promise((reslove, reject) => {
        getJson(url).then(res => {
            if(res.status === 200) {
                if(res.data.res) {
                    reslove(res.data.html)
                }
            }
        })
    })
}