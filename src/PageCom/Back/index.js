import React, { Component } from 'react';
import './index.css'

class Back extends Component {
  constructor(props) {
    super(props)

  }

    render() {
        return (
          <div className="BackTop p10">
            <a href="#" className="back">返回</a>
            <div className="container">
              <a href="#">加群</a>
              <a href="#">分享</a>
              <a href="#">其他</a>
            </div>
          </div>
        )}
}

export default Back;