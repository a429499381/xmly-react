import React, { Component } from 'react';

import Header from '../PageCom/Header'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'

// import {AV} from 'leancloud-storage'

class FenLei extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Header/>
        <div className="mt86"></div>
          <div>

              <div className="mt86"></div>
              <h4 classID="name">李玉刚 - 刚好遇见你1</h4>
              <audio classID="audio" src="http://audio.xmcdn.com/group32/M08/05/87/wKgJnFnFHgmA3tnSAHEVQqq3e00956.m4a"
                     controls autoplay="true"></audio>
              <button classID="btn-play">播放</button>
              <button classID="btn-stop">暂停</button>
              <button classID="btn-pre">上一首</button>
              <button classID="btn-next">下一首</button>
          </div>

          分类页面
        {/* 底部导航 */}
          <FooterNavgtion/>
        {/* 没有更多 */}
          <NoMore/>
    </div>
    )
  }
  // componentDidMount() {
  //   var APP_ID = '3X9jTyLPjORGtQIdFneYartA-gzGzoHsz';
  //   var APP_KEY = '9XKG8fPj4NlLgIWf71AWrQeD';
  //
  //   AV.init({
  //     appId: APP_ID,
  //     appKey: APP_KEY
  //   });
  //
  //   console.log(AV)
  // }
}

export default FenLei;