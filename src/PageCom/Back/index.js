import React, { Component } from 'react';
import {Link, hashHistory} from 'react-router'
import './index.scss'
import Button from 'antd/lib/button'

class Back extends Component {
    render() {
        return (
          <div className="BackTop p10">
            <Button onClick={this.hashBack.bind(this)} className="back">返回</Button>
          </div>
        )}
        hashBack() {
            hashHistory.push('/')
        }
}

export default Back;