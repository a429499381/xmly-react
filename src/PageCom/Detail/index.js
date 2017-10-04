/**
 * Created by xutao on 2017/10/4.
 */
import React, {Component} from 'react'

import Back from '../../PageCom/Back'
import './index.css'

export default class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Back/>
        <div className="DTitle">
          <h2 className="title">女孩简历写“会用支付宝” 新西兰打工月薪2万 | 新闻早餐 2017.10.1 星期日</h2>
          <div className="play">
              <img src="" alt="" className="playImg" />
              <div className="playImgP">
                <a className="itemIcon ">
                  <i className="palyIcon"></i>
                </a>
              </div>
            <p className="zhubo">主播：东方网</p>
            <div className="playScroll">
              <span className="start">00:00</span>
              <span className="startIng">
                <a href="#" className="red"></a>
              </span>
              <span className="end">16:00</span>
            </div>
          </div>
          <div className="fix pt20"></div>
          <p className="samllTitle">一日之计在于晨， 新闻早餐不能少.</p>
          <p className="samllTitle">微信公众号： xwzc021</p>

          <div className="blums">
            <div className="lists">
              <p className="item">
                625辆出租车顶灯滚动播：老婆我错了。 结果...
              </p>
            </div>
            <a className="itemIcon">
              <i className="palyIcon"></i>
            </a>
          </div>
          <div className="blums">
            <div className="lists">
              <p className="item">
                625辆出租车顶灯滚动播：老婆我错了。 结果...
              </p>
            </div>
            <a className="itemIcon">
              <i className="palyIcon"></i>
            </a>
          </div>
        </div>

      </div>
    )
  }
}