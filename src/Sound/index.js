/**
 * Created by xutao on 2017/10/4.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../redux/actions/store'

import Back from '../PageCom/Back/index'
import Footer from '../PageCom/Footer'
import NoMore from '../PageCom/NoMore'
import './index.scss'

import {soundData} from '../data/axios/sound'
import {getJson} from "../data/axios/get";
import {play, playLoad} from "../Play/index";

class Sound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      currentTime: '00:00',
      playLoad: false
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
                  <a className="itemIcon wh" onClick={this.playHandle.bind(this)}>
                    {
                      this.props.store.play
                        ? <i className="play_play"></i>
                        : <i className="play_pause"></i>
                    }

                  </a>
                </div>
                <p className="zhubo">主播：{play.zhubo}</p>
                <div className="playScroll">
                  <span className="start">{this.state.currentTime}</span>
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
                  <Link to={item.href}
                        onClick={this.push.bind(this, `${item.href}`)}>
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
    this.props.play.add({play:true, id: "001"})
    //播放器
    play()
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

  componentWillUnmount() {
    let current = window.audio.currentTime
    let time = localStorage.getItem('setIntervalTime')
    localStorage.setItem('currentTiem', this.state.currentTime)
    if (time) {
      clearInterval(time)
      console.log('定时器清理完毕', time)
    }
    this.props.play.update({current: current})
  }


  push(url) {
    let regEx = /\d+\/.+\/(\d+)/
    let that = this
    // 计算时间
    let palyTime = function () {
      let times = 0
      let hours = 0
      let setIntervalTime = ''
      // 播放时间 转换。
      let oldTime = localStorage.getItem('setIntervalTime')
      clearInterval(oldTime)
      console.log('oldTime 之前定时器', oldTime)
      clearInterval(setIntervalTime)
      setIntervalTime = setInterval(function () {
        let current = window.audio.currentTime
        if (current < 60) {
          hours = '00'
          times = current.toString().split('.')[0]
          times < 10 ? times = `0${times}` : ''
        } else {
          hours = Math.floor((current.toFixed(0) / 60))
          hours < 10 ? hours = `0${hours}` : ''
          times = current.toFixed(0) - hours * 60
          times < 10 ? times = `0${times}` : ''

        }

        that.setState({
          currentTime: `${hours}:${times}`
        })

      }, 500)
      localStorage.setItem('setIntervalTime', setIntervalTime)
      console.log('setIntervalTime', setIntervalTime)

    }
    let src = url.replace(regEx, function (match, id) {
      getJson(id).then(res => {
        let src = res.data.play_path
        // 保存当前 播放文件地址 与 localStorage
        localStorage.setItem('playCurr', JSON.stringify(src))


        console.log('window.audio.paused', window.audio.paused)
        play(src)

        console.log('window.audio.paused', window.audio.paused)
        palyTime()
        console.log('播放数据 ', id, src,)

        let playload = that.props.store.play
        console.log('playHandle store play', playload)
        // redux
        that.props.play.update({"play": true, id: id, src:src})
      })
    })

  }

  // 播放
  playHandle() {
    playLoad()
    let play = this.props.store.play
    console.log('playHandle store play', play)
    // redux
    this.props.play.update({"play": !play})

    // window.audio.paused ? window.audio.play() : window.audio.pause()
  }
}

function mapStateToProps(state) {
  return {
    store: state.store
  }
}

function mapDispatchToProps(dispatch) {
  return {
    play: bindActionCreators(actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sound)