import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router'
import './index.scss'

class Back extends Component {
    render() {
        return (
          <div className="BackTop p10">
            <span onClick={this.hashBack.bind(this)} className="back">返回</span>
            <div className="container">
              <Link to="">加群</Link>
              <Link to="">分享</Link>
              <Link to="">其他</Link>
            </div>
          </div>
        )}
        hashBack() {
            hashHistory.push('/')
        }
}

export default Back;