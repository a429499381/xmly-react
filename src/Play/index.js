import React, {Component} from 'react';

import Header from '../PageCom/Header'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'


class Play extends Component {
  render() {
    return (
      <div>

        <div className="mt86"></div>
        <h4 id="name">李玉刚 - 刚好遇见你</h4>
          <audio id="audio" src="http://audio.xmcdn.com/group32/M08/05/87/wKgJnFnFHgmA3tnSAHEVQqq3e00956.m4a" controls autoplay="true"></audio>
        <button id="btn-play">播放</button>
        <button id="btn-stop">暂停</button>
        <button id="btn-pre">上一首</button>
        <button id="btn-next">下一首</button>
        {/* 底部导航 */}
          <FooterNavgtion/>
        {/* 没有更多 */}
          <NoMore/>
  </div>
  )
  }

  export  Play;