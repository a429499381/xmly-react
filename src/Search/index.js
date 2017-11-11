import React, { Component } from 'react';

import Header from '../Home/Header'
import FooterNavgtion from '../PageCom/Footer'
import NoMore from '../PageCom/NoMore'

import {SearchData} from '../data/axios/Search'
import QuanList from '../album/albumQuan/list/list'
import {albumData} from '../data/axios/album'
import {soundData} from '../data/axios/sound'
import {JinPinData} from '../data/axios/Jinpin'



class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            id: '',
            data: '',
            dataS: ''
        }
    }
  render() {
    return (
      <div>
        {/* top */}
          <Header/>
        <div className="mt86"></div>
          <QuanList index={this.state.category ? this.state.category : 'rank'} push={this.push.bind(this)} id={this.state.id} data={this.state.data}/>
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
    //  搜索 数据
    SearchData(id,more).then(data => {
        console.log('SearchData',data)
        this.setState({
            data: data.album,
            dataS: data
        })
    })

  }

    push(category) {
        if(category === 'rank') {
            this.setState({
                data: this.state.dataS.rank,
                category: category
            })
            console.log('push  rank', this.state.dataS.rank)
        } else if(category === 'recent') {
            this.setState({
                data: this.state.dataS.recent,
                category: category
            })
            console.log('push recent', this.state.dataS.recent)
        } else {
            this.setState({
                data: this.state.dataS.classic,
                category: category
            })
            console.log('push favorite', this.state.dataS.classic)
        }
    }

}

export default Search;