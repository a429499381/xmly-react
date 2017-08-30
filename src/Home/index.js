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
            data: []
        }
    }
  render() {
        const data = this.state.data
    return (
        <div>
            <div>
              {
                data.map((item, index) => {
                  return <a key={index} href={item.href}>{item.name} </a>
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
       console.log('Home ',Home.data.Fl)

       this.setState({
         data: Home.data.Fl
       })
     })

  }
}

export default Top;