import React, { Component } from 'react';
import './index.scss'

import RectSwiper from 'react-swipe'
import * as Data from '../../Home/config/BannerData.json'

class Banner extends Component {
  constructor(props) {
    super(props)
      this.state = {
        index: '',
      }
  }

    render() {
        const data = this.props.data || Data.data
        // 深拷贝
        let dataS = JSON.parse(JSON.stringify(data))
        dataS.shift()
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
            <div className="banner">
                <RectSwiper className="swiper_box" swipeOptions={opt}>
                    {
                        dataS.map((item, index) => {
                            return <div className="banner_ad"  key ={index} >
                                <a  href={'#'+item.href}>
                                    <img className="ad_img"  src={item.src} alt=""/>
                                </a>
                            </div>
                        })
                    }
                </RectSwiper>
                <div className="index">
                    <ul>
                        <li className={this.state.index === 0 ? "item active" : "item"}></li>
                        <li className={this.state.index === 1 ? "item active" : "item"}></li>
                        <li className={this.state.index === 2 ? "item active" : "item"}></li>
                        <li className={this.state.index === 3 ? "item active" : "item"}></li>
                        <li className={this.state.index === 4 ? "item active" : "item"}></li>
                        <li className={this.state.index === 5 ? "item active" : "item"}></li>
                    </ul>
                </div>
            </div>

        )
    }
    componentDidMount() {
    }

}

export default Banner;