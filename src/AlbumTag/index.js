import React, { Component } from 'react';

import Back from '../PageCom/Back'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'

class AlbumQuan extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Back/>
          <div className="mt86"></div>
           <h1>AlbumQuan</h1>

        {/* 底部导航 */}
          <FooterNavgtion/>

        {/* 没有更多 */}
          <NoMore/>
    </div>
    )
  }
}

export default AlbumQuan;