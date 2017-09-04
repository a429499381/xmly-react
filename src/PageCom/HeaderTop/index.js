import React, { Component } from 'react';
import {Link} from 'react-router'

import './index.css'

class HeaderTop extends Component {
  render() {
      let data = this.props.data
    return (
      <div className="top">
        {/* top */}
            <Link to={data.href}>
              <span className="xinxi">
                信息
                <i></i>
              </span>&nbsp;
            </Link>
            <div className="input dib">
              <input type="text" placeholder={data.value}/>
            </div>&nbsp;
            <span className="top_r dib">
            <a href="/Ls" className="lishi">{data.lishi}</a>
            <a href="/Down" className="down">{data.down}</a>
            <i className="content">&nbsp;</i>
        </span>&nbsp;
            <i className="content">&nbsp;</i>
        {/* top */}
    </div>
    )
  }

}

export default HeaderTop;