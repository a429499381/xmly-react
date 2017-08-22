import React, { Component } from 'react';

import Header from '../PageCom/Header'
import Banner from '../PageCom/Banner'
import TjScroll from '../PageCom/TjScroll'
import Love from '../PageCom/Love_love'
import ListSrcoll from '../PageCom/ListSrcoll'
import NoMore from '../PageCom/NoMore'
import FooterNavgtion from '../PageCom/FooterNavgtion'

import {get, getHome} from '../axios/get.js'


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
                <audio controls>
                    <source src={data.play_path64}></source>
                </audio>
                <audio controls>
                    <source src="http://audio.xmcdn.com/group30/M07/E9/20/wKgJXlmQcTPQ5W1dAHqvPmz6iBI916.m4a"></source>
                </audio>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
  }
  componentDidMount() {
     get().then((res) => {
         this.setState({
             data: res.data
         })
     })

    getHome().then(res => {
      window.data = res.data
      // 获取 clas=item j-candies 标签所有内容
      const Lireg = /(?!<\/?li>)<li\b\s?class="item\s+j-candies"[\d\D]+?(<\/li\b>)/g
      // 获取 href 标签名字
      const name =   /\/(\w+)"/
      // 获取 a 标签的跳转路由
      const Hrefreg = /href="([^"';]+)(?=")/g
      const Srcreg = /src="([^"';]+)(?=")/g
      // const reg = /<li\b([\d\D])+?<\/li>(?!<\/li\b>)/g
      // const regA_Src = /class="item\s+j-candies\b".+?href="([^}]+?)>.+?<img.+?src="([^"]+)(?=")/g
      // const regA_Src1 = /(\bclass\b="item\s+j-candies\b").+?\r\nhref="(.+?)>.+?\r\n<img.+?src="([^"]+)/g
      // const regA_Src2 = /(?:\bclass\b="item\s+j-candies\b").+?\r\n.+href="([^}].+)"/g
      res.data.replace(Lireg, function (match, groun1, groun2, index, origin) {
           let data = match
            data.replace(name, function (match, name) {
              console.log(name)
            })
           data.replace(Hrefreg, function (match, href) {
             console.log(href)
           })
           data.replace(Srcreg, function (match, Src) {
             console.log(Src)
           })
      })
    })
  }
}

export default Top;