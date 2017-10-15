import React, {Component} from 'react';

import Back from '../../PageCom/Back/index'
import FooterNavgtion from '../../PageCom/Footer/index'
import NoMore from '../../PageCom/NoMore/index'
import QuanList from './list/list'

import {soundQuanData} from '../../data/axios/soundQuan'

class soundQuan extends Component {
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
                <NoMore/>
                <FooterNavgtion/>
                {/* 没有更多 */}

            </div>
        )
    }

    componentDidMount() {
        // 获取完整路由
        let url = this.props.location.pathname
        let category = this.props.params.category
        let data = JSON.parse(localStorage.getItem(url))

        // 第一次进入读取 url category 并缓存
        localStorage.setItem('soundQuanIndex', category)

        // 如果存在 就把 index 传递给 QuanList 组件的 index
        this.setState({
            index: category,
            id: this.props.params.id
        })

        console.log('componentDidMOunt url', url)
        console.log('componentDidMOunt id', this.props.params.id)

        if (!data) {
            // 获取数据
            soundQuanData(url).then(res => {
                let data = res.soundQuan
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

export default soundQuan;