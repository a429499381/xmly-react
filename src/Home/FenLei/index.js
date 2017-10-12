import React, { Component } from 'react';

import Header from '../../PageCom/Header/index'
import FooterNavgtion from '../../PageCom/FooterNavgtion/index'
import NoMore from '../../PageCom/NoMore/index'

// import {AV} from 'leancloud-storage'

class FenLei extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Header/>
        <div className="mt86"></div>
          <div>
              <div className="mt86">001</div>
              <div className="mt86"></div>
              <h4 classID="name">李玉刚 - 刚好遇见你1</h4>
              <audio classID="audio" ref='audio' controls src="http://audio.xmcdn.com/group32/M08/05/87/wKgJnFnFHgmA3tnSAHEVQqq3e00956.m4a"></audio>
             
          </div>

          分类页面
        {/* 底部导航 */}
          <FooterNavgtion/>
        {/* 没有更多 */}
          <NoMore/>
    </div>
    )
  }

  componentDidMount() {
    window.N = false
    var src="http://audio.xmcdn.com/group32/M08/05/87/wKgJnFnFHgmA3tnSAHEVQqq3e00956.m4a";
    if(window.audio) {
      return
    }
    window.audio = new Audio(src)
    console.log('window.audio', window.audio)
  }
  play() {
    let audio = this.refs.audio
    //  设置当前播放位置 不设置就是获取当前播放位置
    let star = audio.currentTime = 600
    console.log(audio.currentTime)
    audio.paused ? audio.play() : audio.pause()
  }

  Seek() {
    console.log('window.audio play or pause', window.audio)
    let audio = window.audio
    audio.paused ? audio.play() : audio.pause()
    console.log(audio.duration)
  }
  Up() {
    let audio = window.audio
    audio.playbackRate = audio.playbackRate + 0.2
    if (audio.playbackRate >= 2) {
      audio.playbackRate = 1
    }
    console.log(audio.playbackRate)
  }

  Dp() {
    let audio = window.audio
    let star = audio.startTime
    star = 600
    console.log(audio.startTime)
  }
}

export default FenLei;