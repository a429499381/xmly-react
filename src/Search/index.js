import React, { Component } from 'react';

import Header from '../PageCom/Header'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'

import {SearchData} from '../axios/Search'
import {DetailData} from '../axios/Detail'
import {UserDetailData} from '../axios/UserDetail'



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
    let url = '/33733258/album/4026875'
    let Userurl = '/zhubo/33733258'
    let id = this.props.params.id
    let more = this.props.params.more
    //  搜索 数据
    SearchData(id,more).then(data => {
        console.log(data)
    })

    // 专辑 详情页
    DetailData(url).then(data => {
        console.log(data)
    })
    // 用户 详情页
    UserDetailData(Userurl).then(data => {
      console.log('用户详情页',data)
    })

  }

}

export default Search;