import React, {Component} from 'react';
import LoadIcon from  '../../../PageCom/loadIcon'
import {Link} from 'react-router'
import '../list/list.scss'

class AlbumQuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albumQuanIndex: 0,
            rank: '',
            recent:'',
            classic: '',
            url: ''
        }
    }
    render() {
        let data = this.state.rank
        return (
            <div className="albumQuanList fix">
                <div className="albumQuannav">
                        <span className="item active">最火</span>
                        <span className="item active">最近更新</span>
                        <span className="item active">经典</span>

                </div>
                <div className="Quanlist">
                    <div className="list p5 rel mt5 mb5">
                            <img src="" alt="" className="img"/>
                        <div className="container ">
                            <h4>《白话全本红楼梦》韦岽:著 精致女王：播</h4>
                            <p className="palyNum">10919232</p>
                            <i className="down"></i>
                        </div>
                    </div>
                    <div className="list p5 rel mt5 mb5">
                        <img src="" alt="" className="img"/>
                        <div className="container ">
                            <h4>《白话全本红楼梦》韦岽:著 精致女王：播</h4>
                            <p className="palyNum">10919232</p>
                            <i className="down"></i>
                        </div>
                    </div>
                    <div className="list p5 rel mt5 mb5">
                        <img src="" alt="" className="img"/>
                        <div className="container ">
                            <h4>《白话全本红楼梦》韦岽:著 精致女王：播</h4>
                            <p className="palyNum">10919232</p>
                            <i className="down"></i>
                        </div>
                    </div>
                    <div className="list p5 rel mt5 mb5">
                        <img src="" alt="" className="img"/>
                        <div className="container ">
                            <h4>《白话全本红楼梦》韦岽:著 精致女王：播</h4>
                            <p className="palyNum">10919232</p>
                            <i className="down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumQuan;