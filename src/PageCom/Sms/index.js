import React, { Component } from 'react';

import  HeaderTop from '../HeaderTop'

class Sms extends Component {
  constructor(props) {
    super(props)
    this.state = {
       title: '信息中心',
       data: ''
    }
  }
  render() {
    return (
        <div className="sms">
          <div>
            <a href="#" className="back">返回</a>
            <h2>{this.state.title}</h2>
          </div>
        </div>
      )
    }

}

export default Sms;