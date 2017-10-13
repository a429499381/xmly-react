import React, { Component } from 'react';


import Header from '../../PageCom/Header/index'
import FooterNavgtion from '../../PageCom/FooterNavgtion/index'
import NoMore from '../../PageCom/NoMore/index'
// import List from '../../album/albumTag/list'
import {albumTagData} from '../../data/axios/album-tag'



// 有声小说
class comic extends Component {
    render() {
        return (
            <div className="comic">
                {/* top */}
                <Header />
                <div className="mt86"></div>
                {/*<List/>*/}
                {/* 底部导航 */}
                <FooterNavgtion/>
                {/* 没有更多 */}
                <NoMore/>
            </div>
        )
    }
    componentDidMount() {
        //  数据提取  映射 缓存
        let id = this.props.location.pathname
        let data = JSON.parse(localStorage.getItem(id))
        if(!data && id) {
            albumTagData(id).then(res => {
                data = res
                localStorage.setItem(id, JSON.stringify(res))

                this.setState({
                    data: data
                })
            console.log('album-tag res', data)
            })
        } else {
            this.setState({
                data: data
            })

            console.log('album-tag 缓存',data)
        }


    }

}

export default comic;