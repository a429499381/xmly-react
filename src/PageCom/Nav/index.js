import React, { Component } from 'react';

import './index.css'

class Nav extends Component {
  render() {
      let data = this.props.data
      return (
            <div className="nav">
                {
                    data.map((item, index) => {
                        return  <a key ={index} href={item.href} onClick={this.push.bind(this, item.href, index)} className={this.props.index === index ? "nav_item active" : "nav_item"}>{item.txt}</a>
                    })
                }
            </div>
        )
  }
  push(id, index) {
      this.props.push(id, index)
  }

}

export default Nav;