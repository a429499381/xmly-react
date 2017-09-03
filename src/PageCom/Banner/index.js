import React, { Component } from 'react';
import './index.css'

import RectSwiper from 'react-swipe'
import ItemSwiper from 'ItemSwiper'

class Banner extends Component {
  constructor(props) {
    super(props)
      this.state = {
        index: '',
        data: []
      }
  }

    render() {
        let data =this.state.data
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
                   <ItemSwiper data = {data}/>
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

      this.setState({
          data: data
      })

    }
}

export default Banner;