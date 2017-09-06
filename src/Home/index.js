import React, { Component } from 'react';

import Header from '../PageCom/Header'
import Banner from '../PageCom/Banner'
import TjScroll from '../PageCom/TjScroll'
import Love from '../PageCom/Love_love'
import ListSrcoll from '../PageCom/ListSrcoll'
import NoMore from '../PageCom/NoMore'
import FooterNavgtion from '../PageCom/FooterNavgtion'

// 数据库处理
import {HomeDB} from '../DB/HomeDB'


import  {Data} from '../axios/regex'


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
          <Header/>
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
     let Version = new Data().getTime
     Data().then(reslove => {
       // console.log('reslove', reslove)
       Home.data = reslove
       // console.log('Home ',Home.data.Lists)
       this.setState({
         Fl: Home.data.Fl,
         List: Home.data.Lists,
         Banner: Home.data.banner
       })
       // 创建数据库 并且存储与 indexDB 中
       HomeDB('Home', 4, Home.data)
       // Version = Version + 2
       // HomeDB('Home','List', Version, Home.data.Lists,)
     })
    // 提取数据与  state



  }
}

export default Home;