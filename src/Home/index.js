import React, { Component } from 'react';

import Header from '../PageCom/Header'
import Banner from '../PageCom/Banner'
import TjScroll from '../PageCom/TjScroll'
import Love from '../PageCom/Love_love'
import ListSrcoll from '../PageCom/ListSrcoll'
import NoMore from '../PageCom/NoMore'
import FooterNavgtion from '../PageCom/FooterNavgtion'

import {getJson, getHome} from '../axios/get.js'


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
     getJson().then((res) => {
         this.setState({
             data: res.data
         })
     })

    getHome().then(res => {
      // 测试用 添加未经过处理数据与 window 全局变量中
      window.data = res.data
      const HomeData = {}
      // 获取 clas=item j-candies 标签所有内容
      const Lireg = /(?!<\/?li>)<li\b\s?class="item\s+j-candies"[\d\D]+?(<\/li\b>)/g
      // 获取 href 标签名字
      const name =   /\/(\w+)"/
      // 获取 a 标签的跳转路由
      const Hrefreg = /href="([^"';]+)(?=")/g
      const Srcreg = /src="([^"';]+)(?=")/g

      //  正则匹配  循环 添加 数据 与  HomeData 对象中
      res.data.replace(Lireg, function (match, groun1, groun2, index, origin) {
           // 缓存 每次匹配到的 LI  标签内容
           let data = match
           // 定义 局部 临时变量  作为 回掉 内容变量传递。
           let  Lname = 'No'

           //  正则 匹配 li 标签里面到 名字 rank book ...
            data.replace(name, function (match, name) {
              Lname = name
              // 建立每个 名字的数字  rank[] book[]
              HomeData[name] =  []
              // 添加数组内容
              HomeData[name].push(name)
            })
           data.replace(Hrefreg, function (match, href) {
               // 添加数组内容 href 标签
               HomeData[Lname].push(href)

               })
           data.replace(Srcreg, function (match, Src) {
               // 添加数组内容 Src 标签
               HomeData[Lname].push(Src)

           })
      })

         // 打印 数据  验证
        // console.log(HomeData)

    })
  }
}

export default Top;