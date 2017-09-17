import React, { Component } from 'react';

import Header from '../PageCom/Header'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'

import {SearchData} from '../axios/Search'



class Search extends Component {
  render() {
    return (
      <div>
        {/* top */}
          <Header/>
        <div className="mt86"></div>
        Search
        {/* 底部导航 */}
          <FooterNavgtion/>
        {/* 没有更多 */}
          <NoMore/>
    </div>
    )
  }
  componentDidMount() {
    let id = this.props.params.id
    let more = this.props.params.more
    SearchData(id,more).then(data => {
        console.log(data)
    })
  }

}

export default Search;