import React, { Component } from 'react';

import Header from '../../PageCom/Header/index'
import FooterNavgtion from '../../PageCom/FooterNavgtion/index'
import NoMore from '../../PageCom/NoMore/index'

class Fm extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Header index={4}/>
          Fm 页面

        {/* 底部导航 */}
          <FooterNavgtion/>

        {/* 没有更多 */}
          <NoMore/>
    </div>
    )
  }
}

export default Fm;