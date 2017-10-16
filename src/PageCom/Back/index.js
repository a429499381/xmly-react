import React, { Component } from 'react';
import {hashHistory} from 'react-router'
import './index.scss'

class Back extends Component {
  constructor(props) {
    super(props)

  }

    render() {
        return (
          <div className="BackTop p10">
            <span onClick={this.hashBack.bind(this)} className="back">返回</span>
            <div className="container">
              <a href="#">加群</a>
              <a href="#">分享</a>
              <a href="#">其他</a>
            </div>
          </div>
        )}
        componentDidMount() {
            let {params, location} = this.props
            console.log('返回组件', this.childRoutes)
        }
        hashBack() {
            window.history.back()
        }
}

export default Back;