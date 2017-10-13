import React, { Component } from 'react';

import Header from '../../PageCom/Header/index'
import Back from '../../PageCom/Back/index'
import DetailTitle from '../../Sound/index'
import FooterNavgtion from '../../PageCom/FooterNavgtion/index'
import NoMore from '../../PageCom/NoMore/index'
import QuanList from '../albumQuan/list/list'

class AlbumQuan extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Back/>
        {/* 底部导航 */}
        <QuanList/>
          <FooterNavgtion/>
        {/* 没有更多 */}
          {/*<NoMore/>*/}
    </div>
    )
  }
}

export default AlbumQuan;