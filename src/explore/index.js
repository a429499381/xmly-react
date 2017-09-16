import React, { Component } from 'react';

import Header from '../PageCom/Header'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'

class Search extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Header/>
          <div className="mt86"></div>
           <h1>explore</h1>

        {/* 底部导航 */}
          <FooterNavgtion/>

        {/* 没有更多 */}
          <NoMore/>
    </div>
    )
  }
}

export default Search;