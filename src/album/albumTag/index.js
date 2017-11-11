import React, { Component } from 'react';


import Header from '../../Home/Header/index'
import List from '../../album/albumTag/list'
import {albumTagData} from '../../data/axios/album-tag'



// 有声小说
class albumTag extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }
    render() {
        return (
            <div className="comic">
                {/* top */}
                <Header />
                <div className="mt86"></div>
                <List data={this.state.data}/>
            </div>
        )
    }
    componentDidMount() {
        //  数据提取  映射 缓存
        let id = this.props.location.pathname
        let data = JSON.parse(localStorage.getItem(id))
        if(!data && id) {
            albumTagData(id).then(res => {
                data = res.albumTag
                localStorage.setItem(id, JSON.stringify(data))

                this.setState({
                    data: data
                })
            })
        } else {
            this.setState({
                data: data
            })
        }


    }

}

export default albumTag;