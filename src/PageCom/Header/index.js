import React, { Component } from 'react';

import './index.css'
import Nav from '../Nav/index'
import HeaderTop from '../HeaderTop/index'


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
      let Data = this.props.data
      if(Data) {
        this.setState({
          nav: Data.nav,
          top: Data.top
        })
      }



  }

}

export default Header;