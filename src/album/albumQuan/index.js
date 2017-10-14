import React, {Component} from 'react';
import {hashHistory} from 'react-router'

import Header from '../../PageCom/Header/index'
import Back from '../../PageCom/Back/index'
import DetailTitle from '../../Sound/index'
import FooterNavgtion from '../../PageCom/FooterNavgtion/index'
import NoMore from '../../PageCom/NoMore/index'
import QuanList from '../albumQuan/list/list'

import {albumQuanData} from '../../data/axios/albumQuan'

class AlbumQuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: '',
            id: '',
            data: ''
        }
    }

    render() {
        return (
            <div>
                {/* top */}
                <Back/>
                {/* 底部导航 */}
                <QuanList index={this.state.index} id={this.state.id} push={this.push.bind(this)}
                          data={this.state.data}/>
                <FooterNavgtion/>
                {/* 没有更多 */}
                {/*<NoMore/>*/}
            </div>
        )
    }

    componentDidMount() {
        let url = this.props.location.pathname
        let index = this.props.params.category
        let urlId = this.props.params.id
        let data = JSON.parse(localStorage.getItem(url))

        // 第一次进入读取 url category 并缓存
        localStorage.setItem('albumQuanIndex', index)
        localStorage.setItem('albumQuanId', urlId)
        // 如果存在 就把 index 传递给 QuanList 组件的 index
        this.setState({
            index: index ? index : 0,
            id: urlId
        })

        console.log('componentDidMOunt', url)
        console.log('componentDidMOunt this.state.id', this.state.id)

        if (!data) {
            // 获取数据
            albumQuanData(url).then(res => {
                let data = res.albumQuan
                localStorage.setItem(url, JSON.stringify(data))
                this.setState({
                    data: data
                })
                console.log('albumQaunData 请求数据', res.albumQuan)
            })
        } else {
            this.setState({
                data: data
            })

            console.log('albumQuandata 缓存', data)
        }

    }

    // 导航状态
    push(index) {
        let id = this.props.params.id
        let url = `/album-quan/${id}/${index}`
        console.log('push', id)
        localStorage.setItem('albumQuanIndex', index)
        localStorage.setItem('albumQuanId', id)
        // 路由跳转
        hashHistory.push(url)
        console.log('hashHistory', url)
    }


}

export default AlbumQuan;