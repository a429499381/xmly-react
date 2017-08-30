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
            List: []
        }
    }
  render() {
        const data = this.state.Fl
        const List = this.state.List
    return (
        <div>
            <div>
              {
                data.map((item, index) => {
                  return <p key={index} href={item.href}>{item.name} </p>
                })
              }
            </div>
            <div>
              <h2>List</h2>

              {
                List.map((item, index) => {
                  item.map((item1, index1) => {
                    return <p>{item1}</p>
                  })
                })
              }
            </div>
        </div>
    )
  }
  componentDidMount() {
     var Home = {}
     Data().then(reslove => {
       console.log('reslove', reslove)
       Home.data = reslove
       console.log('Home ',Home.data.Lists[0])
       this.setState({
         Fl: Home.data.Fl,
         List: Home.data.Lists
       })
     })

  }
}

export default Top;