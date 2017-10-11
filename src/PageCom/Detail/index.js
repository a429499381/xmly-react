/**
 * Created by xutao on 2017/10/4.
 */
import React, {Component} from 'react'

import Back from '../../PageCom/Back'
import './index.css'

import {UserDetailData} from '../../axios/UserDetail'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  render() {
    let data = this.state.data
    let play = this.state.data.play
    let blum = this.state.data.blum
    return (
      <div>
        {
          data
            ? <div>
               <Back/>
            <div className="DTitle">
              <h2 className="title">{}</h2>
              <div className="play">
                <img src="" alt="" className="playImg"/>
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
            : <div>加载中</div>
        }
      </div>
    )
  }

  componentDidMount() {
    // 获取当前页面url
    let id = this.props.location.pathname
    console.log(id)

    // 获取用户页数据
    UserDetailData(id).then(data => {
      this.setState({
        data: data
      })
      console.log('用户页面', data)
    })

  }
}