import React, { Component } from 'react';
import './index.css'

class Banner extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let data = this.props.data
    return (
      <div>
        {/* banner 图 */}
          <div className="banner_ad">
          <a href={data.href} key='0' className="ad_img">
            <img src={data.src} alt=""/>{data.txt}
          </a>
        </div>
        {/* banner 图 */}
    </div>
    )
  }
}

export default Banner;