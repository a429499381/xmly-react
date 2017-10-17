/**
 * Created by xutao on 2017/10/4.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

import Back from '../PageCom/Back/index'
import Footer from '../PageCom/Footer'
import NoMore from '../PageCom/NoMore'
import './index.scss'

import {soundData} from '../data/axios/sound'
import {play} from "../Play/index";

export default class Sound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  render() {
    let data = this.state.data
    let list = this.state.data.lists
    let play = this.state.data.play
    let blum = this.state.data.blum
    return (
      <div className='sound'>
        {
          data
            ? <div>
               <Back/>
            <div className="DTitle">
              <h2 className="title">{play.title}</h2>
              <div className="play">
                <img src="" alt="" className="playImg"/>
                <div className="playImgP">
                  <a className="itemIcon" onClick={this.playHandle.bind(this)}>
                      <i className="palyIcon"></i>
                  </a>
                </div>
                <p className="zhubo">主播：{play.zhubo}</p>
                <div className="playScroll">
                  <span className="start">00:00</span>
                  <span className="startIng">
                <a href="#" className="red"></a>
              </span>
                  <span className="end">{play.time}</span>
                </div>
              </div>
              <div className="fix pt20"></div>
              <p className="samllTitle">{blum.info}</p>
            </div>
            {
              list.map((item, index) => {
                return <div key={index}>
                  <Link to={item.href} onClick={this.push.bind(this, `${item.href}`)}>
                    <div className="blums">
                      <div className="lists">
                        <p className="item">
                          {item.title}
                        </p>
                      </div>
                      <a className="itemIcon">
                        <i className="palyIcon"></i>
                      </a>
                    </div>
                  </Link>
                </div>
              })
            }
          </div>
            : <div>加载中</div>
        }
        <NoMore/>
        <Footer/>
      </div>
    )
  }

  componentDidMount() {
    // 获取当前页面url
    let id = this.props.location.pathname
    let data = localStorage.getItem(id)
    console.log(id)
    if (data) {
      this.setState({
        data: JSON.parse(data)
      })
    } else {
      // 获取用户页数据
      soundData(id).then(data => {
        localStorage.setItem(id, JSON.stringify(data))
        this.setState({
          data: data
        })
        console.log('用户页面', data)
      })
    }


  }

    push(url) {
        console.log('push url', url)
        soundData(url).then(data=> {
            this.setState({
                data: data
            })
        })
    }

    // 播放
    playHandle(src) {
       let url = 'http://audio.xmcdn.com/group30/M0B/A9/85/wKgJXlm1JDHDtvP5ADErtZjEGyk778.m4a'
       play(url)
       console.log('paly url', url)
    }
}