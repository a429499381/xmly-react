import React, { Component } from 'react';

import Header from '../PageCom/Header'
import Banner from '../PageCom/Banner'
import TjScroll from '../PageCom/TjScroll'
import Love from '../PageCom/Love_love'
import ListSrcoll from '../PageCom/ListSrcoll'
import NoMore from '../PageCom/NoMore'
import FooterNavgtion from '../PageCom/FooterNavgtion'

// 数据库处理
import {HomeDB} from '../data/DB/HomeDB'
import {GetData} from '../data/DB/GetData'


import  {Data} from '../data/axios/Home'

// 头部 数据
import  HeaderData from '../PageCom/config/config.json'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Fl: [],
            List: [],
            Banner: []
        }
    }
  render() {
        let Fl = this.state.Fl
        let List = this.state.List
    return (
        <div>
          <Header data = {HeaderData}/>
          <div className="mt86"></div>
            {
                List.length
                ?  <Banner data = {List[6]}/>
                : <div>没有内容啦</div>

            }
          <TjScroll data = {Fl}/>
          <div className="list">
            {
              List.length
                ? <div>
                      <Love love = {List[3]}/>
                      {
                List.map((item, index) => {
                  return <ListSrcoll data = {item} key = {index} />
                })
              }</div>
                : <div>没有内容啦</div>
            }

          </div>
          <NoMore/>
          <FooterNavgtion/>
        </div>
    )
  }
  componentDidMount() {
     // 提取数据与  state
     let Home = {}
     Home.data = []
     let newTime = new Date().getTime()
     let localTime = localStorage.getItem('HomeData') * 1
     let OverTime = newTime - localTime
     let that = this

     let data = function () {
         if (localStorage.getItem('home')) {
             Home.data =  JSON.parse(localStorage.getItem('home'))

             // 深拷贝， 解决未知地方修改导致数据不全。
             let data = JSON.parse(JSON.stringify(Home.data))
             that.setState({
                 Fl: Home.data.Fl,
                 List: Home.data.Lists,
                 Banner: Home.data.banner
             })
         } else {
             Data().then(reslove => {
                 localStorage.setItem('home', JSON.stringify(reslove))
                 Home.data = reslove

                 // 深拷贝， 解决未知地方修改导致数据不全。
                 let data = JSON.parse(JSON.stringify(Home.data))
                 that.setState({
                     Fl: Home.data.Fl,
                     List: Home.data.Lists,
                     Banner: Home.data.banner
                 })

                 // 创建数据库 并且存储与 indexDB 中
                 // HomeDB(data)
             })
         }
     }
     data()

     // 提取数据与  state over

    // 查询特定 空间数据ok
    // GetData('Home', 'Fl')
  }
}

export default Home;