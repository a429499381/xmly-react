import React, { Component } from 'react';
import './index.css'

class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      love: []
    }
  }
  render() {
    return (
      <div>
        {/* 猜你喜欢 */}
         <div className="love">
          <div className="love_title">
            <a className="love_t" href="javascript:;">猜你喜欢</a>&nbsp;
            <a href="javascript:;" className="more">更多 ></a>&nbsp;
            <i className="content">&nbsp;</i>
          </div>
          <div className="love_con">
            <a href="javascript:;" className="con_item">
              <p className="img">
                <span className="img_number">1871.0万</span>
              </p>
              <span className="item_txt">黑暗血时代黑暗血时代</span>
            </a>&nbsp;
            <i className="content">&nbsp;</i>
          </div>
        </div>
        {/* 猜你喜欢 */}
      </div>
    )
  }

  componentDidMount() {
    let List = this.props.data
    let love = []
    console.log('love list', List)

  }
}

export default Top;