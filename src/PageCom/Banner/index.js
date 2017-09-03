import React, { Component } from 'react';
import './index.css'

import RectSwiper from 'react-swipe'

class Banner extends Component {
  constructor(props) {
    super(props)
      this.state = {
        index: '',
      }
  }

    render() {
        const data =this.props.data
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
            <div>
                <RectSwiper className="swiper_box" swipeOptions={opt}>
                    {
                        data.map((item, index) => {
                            return <div key ={index}>
                                <a href={item.href}>
                                    <img src={item.src} alt=""/>
                                </a>
                            </div>
                        })
                    }
                </RectSwiper>
                <div className="index">
                    {this.state.index }
                </div>
            </div>

        )
    }
    componentDidMount() {
      this.props.data.shift()
    }
}

export default Banner;