import React, {Component} from 'react';
import {Link} from 'react-router'
import Back from '../../PageCom/Back/index'
import FooterNavgtion from '../../PageCom/FooterNavgtion/index'
import NoMore from '../../PageCom/NoMore/index'
import {albumData} from '../../data/axios/album'
import './index.css'

class AlbumQuan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ''
        }
    }

    render() {
        let data = this.state.data
        let header = data.header
        let lists = data.Lists
        let more = data.Album
        return (
            <div>
                {/* top */}
                <Back/>
                <div className="mt86"></div>
                {
                    data
                        ?
                        <div>
                            <div className="header">
                                <Link to="">
                                    <img src={header.Img} className='haderImg' alt=""/>
                                </Link>
                                <div className="container">
                                    <p className="title">{header.Title}</p>
                                    <p className="intro">{header.Intro}</p>
                                    <p className="name">{header.name}</p>
                                </div>
                            </div>
                            <div className="txt">
                                <h2 className="title">{data.Txt.title}</h2>
                                <p className="intro">{data.Txt.intro}</p>
                            </div>
                            <div className="album">
                                {
                                    more.map((item, index) => {
                                        return <div key={index}>
                                            <Link to={item.href}>
                                                <img src={item.img} alt="" className="img"/>
                                                <p className="title">{item.Title}</p>
                                                <p className="smallIcon">
                                                    <span className="paly">{item.playNum}</span>
                                                    <span className="num">{item.playTime}</span>
                                                </p>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="lists">
                                {
                                    lists.map((item, index) => {
                                        return <div key={index}>
                                            <Link to={item.href} className="goto">
                                                <p className="title">{item.Title}</p>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        : <div>加载中</div>
                }

                {/* 底部导航 */}
                <FooterNavgtion/>

                {/* 没有更多 */}
                <NoMore/>
            </div>
        )
    }

    componentDidMount() {
        let id = this.props.location.pathname
        let data = JSON.parse(localStorage.getItem(id))
        let that = this
        console.log(id)
        if (!data) {
            albumData(id).then(data => {
                // 把数组 转换为 对象  再格式化为 字符串 才能保存 localStorage  中。
                let obj = {}
                let dataObj = JSON.stringify(Object.assign(obj, data))
                localStorage.setItem(id, dataObj)

                 this.setState({
                   data: data
                 })
                 window.obj = obj
                 console.log(obj)

            })
        } else {
            // 启动缓存数据
            this.setState({
              data: data
            })
            console.log('缓存数据', data)
        }
    }
}

export default AlbumQuan;