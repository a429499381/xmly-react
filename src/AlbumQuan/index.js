import React, { Component } from 'react';

import Header from '../PageCom/Header'
import Back from '../PageCom/Back'
import DetailTitle from '../PageCom/Detail'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'

class AlbumQuan extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Back/>
          <DetailTitle/>
        {/* 底部导航 */}
          <FooterNavgtion/>
        {/* 没有更多 */}
          {/*<NoMore/>*/}
    </div>
    )
  }
}

export default AlbumQuan;