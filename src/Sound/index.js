/**
 * Created by xutao on 2017/10/4.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

import Back from '../PageCom/Back/index'
import './index.css'

import {UserDetailData} from '../data/axios/UserDetail'

export default class Sound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  render() {
    let data = this.state.data
    let list = this.state.data.lists
    let play = this.state.data.play
    let blum = this.state.data.blum
    return (
      <div>
        {
          data
            ? <div>
               <Back/>
            <div className="DTitle">
              <h2 className="title">{play.title}</h2>
              <div className="play">
                <img src="" alt="" className="playImg"/>
                <div className="playImgP">
                  <a className="itemIcon">
                      <i className="palyIcon"></i>
                  </a>
                </div>
                <p className="zhubo">主播：{play.zhubo}</p>
                <div className="playScroll">
                  <span className="start">00:00</span>
                  <span className="startIng">
                <a href="#" className="red"></a>
              </span>
                  <span className="end">{play.time}</span>
                </div>
              </div>
              <div className="fix pt20"></div>
              <p className="samllTitle">{blum.info}</p>
            </div>
            {
              list.map((item, index) => {
                return <div key={index}>
                  <Link to={item.href}>
                    <div className="blums">
                      <div className="lists">
                        <p className="item">
                          {item.title}
                        </p>
                      </div>
                      <a className="itemIcon">
                        <i className="palyIcon"></i>
                      </a>
                    </div>
                  </Link>
                </div>
              })
            }
          </div>
            : <div>加载中</div>
        }
      </div>
    )
  }

  componentDidMount() {
    // 获取当前页面url
    let id = this.props.location.pathname
    let data = localStorage.getItem(id)
    console.log(id)
    if (data) {
      this.setState({
        data: JSON.parse(data)
      })
    } else {
      // 获取用户页数据
      UserDetailData(id).then(data => {
        localStorage.setItem(id, JSON.stringify(data))
        this.setState({
          data: data
        })
        console.log('用户页面', data)
      })
    }


  }
}