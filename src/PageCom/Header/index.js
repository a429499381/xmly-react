import React, { Component } from 'react';

import './index.css'
import Nav from '../Nav/index'
import HeaderTop from '../HeaderTop/index'
import Data from '../config/config.json'


class Header extends Component {
  render() {
    return (
            <div className="pos">
              <HeaderTop data = {Data.top}/>
              <Nav/>
            </div>
         )
  }

}

export default Header;