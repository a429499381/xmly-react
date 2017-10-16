import React, {Component} from 'react';

import Back from '../../PageCom/Back/index'
import FooterNavgtion from '../../PageCom/Footer/index'
import NoMore from '../../PageCom/NoMore/index'
import QuanList from '../albumQuan/list/list'

import {albumQuanData} from '../../data/axios/albumQuan'

class AlbumQuan extends Component {
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
                <Back/>
                {/* 底部导航 */}
                <QuanList index={this.state.category ? this.state.category : 'rank'} push={this.push.bind(this)} id={this.state.id} data={this.state.data}/>
                <NoMore/>
                <FooterNavgtion/>
                {/* 没有更多 */}

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

        if (data !== 'a') {
            // 获取数据
            albumQuanData(url).then(res => {
                let data = res.rank
                localStorage.setItem(url, JSON.stringify(data))
                this.setState({
                    data: data,
                    dataS: res
                })
                console.log('albumQaunData 请求数据', res.rank)
            })
        } else {
            this.setState({
                data: data
            })

            console.log('albumQuandata 缓存', data)
        }

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

export default AlbumQuan;