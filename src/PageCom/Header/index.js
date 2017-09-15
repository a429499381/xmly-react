import React, { Component } from 'react';

import './index.css'
import Nav from '../Nav/index'
import HeaderTop from '../HeaderTop/index'
import * as Data from '../config/config.json'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nav: [],
            top: ''
        }
    }
  render() {
    return (
            <div className="pos">
                {
                    this.state.top
                    ?  <HeaderTop data = {this.state.top} title = '消息' />
                    : ''
                }
                {
                    this.state.top
                        ? <Nav data = {this.state.nav} index="0"/>
                        : ''
                }

            </div>
         )
  }

  componentDidMount() {
      this.setState({
          nav: Data.nav,
          top: Data.top
      })
  }

}

export default Header;