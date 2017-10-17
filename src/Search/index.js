import React, { Component } from 'react';

import Header from '../Home/Header'
import FooterNavgtion from '../PageCom/Footer'
import NoMore from '../PageCom/NoMore'

import {SearchData} from '../data/axios/Search'
import {albumData} from '../data/axios/album'
import {soundData} from '../data/axios/sound'
import {JinPinData} from '../data/axios/Jinpin'



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
    let url = '/80325809/album/10439439'
    let Userurl = '/zhubo/33733258'
    let Jinpin = '/49265909/album/7368509'
    let id = this.props.params.id
    let more = this.props.params.more
    //  搜索 数据
    SearchData(id,more).then(data => {
        console.log('SearchData',data)
    })

    // 专辑 详情页
    albumData(url).then(data => {
        console.log('album',data)
    })
    // 用户 详情页
    soundData(Userurl).then(data => {
      console.log('用户详情页',data)
    })

    JinPinData(Jinpin).then(data => {
      console.log('精品页OK', data)
    })

  }

}

export default Search;