import React, { Component } from 'react';
import {Link} from 'react-router'


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
            <Link to="#" className="back">返回</Link>
            <h2>{this.state.title}</h2>
          </div>
        </div>
      )
    }

}

export default Sms;