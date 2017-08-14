import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router'

import './index.css'

class Top extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <div className="pos">
          <div className="top ">
            <Link to="/List">
              <span className="xinxi">
                信息
                <i></i>
              </span>&nbsp;
            </Link>
            <div className="input dib">
              <input type="text" placeholder="散文 鲁智深乡村灵异时间让你.."/>
            </div>&nbsp;
            <span className="top_r dib">
            <a href="javascript:;" className="lishi">历史</a>
            <a href="javascript:;" className="down">下载</a>
            <i className="content">&nbsp;</i>
        </span>&nbsp;
            <i className="content">&nbsp;</i>
          </div>
          <div className="nav ">
            <a href="javascript:;" className="nav_item active">热门</a>&nbsp;
            <a href="javascript:;" className="nav_item">分类</a>&nbsp;
            <a href="javascript:;" className="nav_item">精品</a>&nbsp;
            <a href="javascript:;" className="nav_item">直播</a>&nbsp;
            <a href="javascript:;" className="nav_item">广播</a>&nbsp;
            <i className="content">&nbsp;</i>
          </div>
        </div>
        {/* top */}
    </div>
    )
  }

}

export default Top;