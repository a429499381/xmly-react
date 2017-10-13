import React, { Component } from 'react';
import {hashHistory} from 'react-router'
import './index.css'
import Nav from '../Nav/index'
import HeaderTop from '../HeaderTop/index'
import LoadIcon from '../../PageCom/loadIcon'
// 头部 数据
import HeaderData from '../config/config.json'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: [],
            top: '',
            index: 0
        }
    }
  render() {
    return (
            <div className="pos">
                  {
                    this.state.top
                    ?  <HeaderTop data = {this.state.top} title = '消息' />
                    : <LoadIcon/>
                }
                {
                    this.state.top
                        ? <Nav data = {this.state.nav} push={this.push.bind(this)} index={this.state.index}/>
                        : <LoadIcon/>
                }
            </div>
         )
  }

  componentDidMount() {
      let Data = HeaderData
      if(Data) {
        this.setState({
          nav: Data.nav,
          top: Data.top,
          index: parseInt(localStorage.getItem('navIndex'))
        })
      }
  }

  push(id, index) {
     hashHistory.push(id)
     localStorage.setItem('navIndex',index)
  }
}

export default Header;