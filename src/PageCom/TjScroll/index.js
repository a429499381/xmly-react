import React, { Component } from 'react';
import './index.scss'

class TjScroll extends Component {
  render() {
    let data = this.props.data
    return (
      <div>
        {/* 推荐 横向滚动 */}
          <div className="link_icon">
            {
              data.map((item, index) => {
                return  <a className="link_item" href={'#'+item.href} key = {index}  >
                              <img className="icon" src={item.src} alt={item.name}/>
                        </a>

              })
            }


        </div>
        {/* 推荐 横向滚动 */}
      </div>
    )
  }

}

export default TjScroll;