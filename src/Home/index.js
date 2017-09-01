import React, { Component } from 'react';

import Header from '../PageCom/Header'
import Banner from '../PageCom/Banner'
import TjScroll from '../PageCom/TjScroll'
import Love from '../PageCom/Love_love'
import ListSrcoll from '../PageCom/ListSrcoll'
import NoMore from '../PageCom/NoMore'
import FooterNavgtion from '../PageCom/FooterNavgtion'

import {getJson, getHome} from '../axios/get.js'
import  {Data} from '../axios/regex'


class Top extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Fl: [],
            List: [],
            Banner: []
        }
    }
  render() {
        const Fl = this.state.Fl
        const List = this.state.List
    return (
        <div>
          <Header/>
          <div className="mt86"></div>
          <Banner data = {this.state.Banner}/>
          <TjScroll data = {Fl}/>
          <Love data = {List}/>
          <div className="list">
            {
              List.length
                ? <div>{
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
     Data().then(reslove => {
       console.log('reslove', reslove)
       Home.data = reslove
       console.log('Home ',Home.data.Lists)
       this.setState({
         Fl: Home.data.Fl,
         List: Home.data.Lists,
         Banner: Home.data.banner
       })
     })
    // 提取数据与  state


  }
}

export default Top;