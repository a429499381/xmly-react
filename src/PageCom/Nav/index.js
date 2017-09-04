import React, { Component } from 'react';

import './index.css'

class Nav extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <div className="pos">
            <div className="nav">
              <a href="#/Home" className="nav_item active">热门</a>&nbsp;
              <a href="#/FenLei" className="nav_item">分类</a>&nbsp;
              <a href="#/JingPin" className="nav_item">精品</a>&nbsp;
              <a href="#/ZhiBo" className="nav_item">直播</a>&nbsp;
              <a href="#/Fm" className="nav_item">广播</a>&nbsp;
              <i className="content">&nbsp;</i>
            </div>
        </div>
        {/* top */}
    </div>
    )
  }

}

export default Nav;