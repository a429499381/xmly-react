import {getHome} from './get.js'
const Tdata = []

getHome().then(res=> {
    let data = res.data
    Tdata = data.match(/<li\b([\d\D])+?<\/li>(?!<\/li\b>)/g)
    console.log("Tdata",Tdata)
})