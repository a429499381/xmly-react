import React, { Component } from 'react';

import Header from '../PageCom/Header'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'

import {AV} from 'leancloud-storage'

class FenLei extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Header/>
        <div className="mt86"></div>
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