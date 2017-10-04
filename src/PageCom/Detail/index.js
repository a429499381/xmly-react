/**
 * Created by xutao on 2017/10/4.
 */
import React, {Component} from 'react'

import Back from '../../PageCom/Back'
import 'index.css'

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Back/>
        <h4 className="title">中国男子在</h4>
        <div className="paly">
          <img src="" alt="" className="play"/>
          <span className="zhubo">主播：东方网</span>
          <span className="playScroll">
            <span className="start">00:00</span>
            <span className="startIng"></span>
            <span className="end">00:00</span>
          </span>
        </div>
        <p className="samllTitle">一日之计在于晨， 新闻早餐不能少.</p>
        <p className="samllTitle">微信公众号： xwzc021</p>

        <div className="blums">
          <div className="lists">
            <p className="item">
              625辆出租车顶灯滚动播：老婆我错了。 结果...
            </p>
            <a href="#" className="itemIcon"></a>
          </div>
        </div>
      </div>
    )
  }
}