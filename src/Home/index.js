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
          List: {}
        }
    }
  render() {
        let Fl = this.state.Fl
        let List = this.state.List
    return (
        <div>
            <div>
              {
                Fl.map((item, index) => {
                  return <p key={index} href={item.href}>{item.name} </p>
                })
              }
            </div>
            <div>
              {
                List.map((item, index) => {
                  return <p key={index}>{item}</p>
                })
              }
            </div>
        </div>
    )
  }
  componentDidMount() {
     Data().then(reslove => {
       console.log('reslove', reslove)

       this.setState({
         Fl: reslove.Fl,
         List: reslove.Lists
       })
       console.log('this.state.data', this.state.Fl)
     })

  }
}

export default Top;