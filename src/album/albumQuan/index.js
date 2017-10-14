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
            category: '',
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
                <QuanList index={this.state.category} id={this.state.id} data={this.state.data}/>
                <FooterNavgtion/>
                {/* 没有更多 */}
                {/*<NoMore/>*/}
            </div>
        )
    }

    componentDidMount() {
        let url = this.props.location.pathname
        let category = this.props.params.category
        let data = JSON.parse(localStorage.getItem(url))

        // 第一次进入读取 url category 并缓存
        localStorage.setItem('albumQuanIndex  category', category)

        // 如果存在 就把 index 传递给 QuanList 组件的 index
        this.setState({
            index: category,
            id: this.props.params.id
        })

        console.log('componentDidMOunt url', url)

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

}

export default AlbumQuan;