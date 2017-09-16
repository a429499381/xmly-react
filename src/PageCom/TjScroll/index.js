import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import './index.css'

class TjScroll extends Component {
  render() {
    let data = this.props.data
    return (
      <div>
        {/* 推荐 横向滚动 */}
          <div className="link_icon">
            {
              data.map((item, index) => {
                return  <a className="link_item" href={'#'+item.href} key = {index} onClick={this.PushRouter.bind(this, item.href)} >
                              <img className="icon" src={item.src} alt={item.name}/>
                        </a>

              })
            }


        </div>
        {/* 推荐 横向滚动 */}
      </div>
    )
  }

    PushRouter(param) {
        hashHistory.push(param)
    }
}

export default TjScroll;