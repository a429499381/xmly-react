import React, { Component } from 'react';
import './index.css'

class Top extends Component {
  render() {
    return (
      <div className="pos">
        <div className="top ">
          <a href="javascript:;" className="xinxi">信息<i></i></a>&nbsp;
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
      </div>
    )
  }
}

export default Top;