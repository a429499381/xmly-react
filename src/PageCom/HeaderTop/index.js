import React, { Component } from 'react';
import {Link} from 'react-router'

import './index.css'

class HeaderTop extends Component {
  render() {
    return (
      <div>
        {/* top */}
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
            <a href="/Ls" className="lishi">历史</a>
            <a href="/Down" className="down">下载</a>
            <i className="content">&nbsp;</i>
        </span>&nbsp;
            <i className="content">&nbsp;</i>
        {/* top */}
    </div>
    )
  }

}

export default HeaderTop;