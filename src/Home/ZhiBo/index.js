import React, { Component } from 'react';

import Header from '../../PageCom/Header/index'
import FooterNavgtion from '../../PageCom/FooterNavgtion/index'
import NoMore from '../../PageCom/NoMore/index'

class ZhiBo extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Header/>
          <div className="mt86"></div>
          直播页面
        {/* 底部导航 */}
          <FooterNavgtion/>

        {/* 没有更多 */}
          <NoMore/>
    </div>
    )
  }
}

export default ZhiBo;