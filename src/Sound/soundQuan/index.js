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
            data: '',
            dataS: '',
        }
    }

    render() {
        return (
            <div>
                {/* top */}
                <Back/>
                {/* 底部导航 */}
                <QuanList index={this.state.category ? this.state.category : 'rank' } push={this.pushHandle.bind(this)} id={this.state.id} data={this.state.data}/>
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

        if (data !== 'aa') {
            // 获取数据
            soundQuanData(url).then(res => {
                let data = res.rank
                console.log('component 请求数据',data)
                localStorage.setItem(url, JSON.stringify(res))
                this.setState({
                    data: data,
                    dataS: res
                })
                console.log('albumQaunData 请求数据', res)
            })
        } else {
            this.setState({
                data: data
            })

            console.log('albumQuandata 缓存', data)
        }


    }
    pushHandle(category) {
        if(category === 'rank') {
            this.setState({
                data: this.state.dataS.rank,
                category: category
            })
            console.log('push  rank', this.state.dataS.rank)
        } else if(category === 'recent') {
            this.setState({
                data: this.state.dataS.hot,
                category: category
            })
            console.log('push recent', this.state.dataS.hot)
        } else {
            this.setState({
                data: this.state.dataS.favorite,
                category: category
            })
            console.log('push favorite', this.state.dataS.favorite)
        }
    }
}

export default soundQuan;