import React, { Component } from 'react';

import Hearder from '../PageCom/Header'
import Banner from '../PageCom/Banner'
import TjScroll from '../PageCom/TjScroll'
import Love from '../PageCom/Love_love'
import ListSrcoll from '../PageCom/ListSrcoll'
import NoMore from '../PageCom/NoMore'
import FooterNavgtion from '../PageCom/FooterNavgtion'

class Top extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Hearder/>
        {/* top */}

        {/* banner 图 */}
          <Banner/>
        {/* banner 图 */}

        {/* 推荐 横行滚动*/}
         <TjScroll/>
        {/* 推荐 横行滚动*/}

        {/* 猜你喜欢 */}
           <Love/>
        {/* 猜你喜欢 */}

        {/* 滚动列表页 */}
         <ListSrcoll/>
        {/* 滚动列表页 */}

        {/* 底部导航 */}
          <FooterNavgtion/>
        {/* 底部导航 */}

        {/* 没有更多 */}
          <NoMore/>
        {/* 没有更多 */}
    </div>
    )
  }
}

export default Top;