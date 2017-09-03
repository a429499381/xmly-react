import React, { Component } from 'react';
import './index.css'

import RectSwiper from 'react-swipe'

class Banner extends Component {
  constructor(props) {
    super(props)
      this.state = {
        index: '',
        data: []
      }
  }

    render() {
        let data = this.state.data
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
                   <div>1</div>
                   <div>2</div>
                   <div>3</div>
                </RectSwiper>
                <div className="index">
                    {this.state.index }
                </div>
            </div>

        )
    }
    componentDidMount() {
      let data = this.props.data
        data.shift()
    }
}

export default Banner;