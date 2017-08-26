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
            data: ''
        }
    }
  render() {
        const data = this.state.data
    return (
        <div>
            <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
  }
  componentDidMount() {
     this.setState({
         data: '11'
     })
    console.log(Data())
  }
}

export default Top;