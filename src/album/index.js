import React, {Component} from 'react';
import {Link} from 'react-router'
import Back from '../PageCom/Back'
import FooterNavgtion from '../PageCom/Footer'
import NoMore from '../PageCom/NoMore'
import {albumData} from '../data/axios/album'
import LoadIcon from '../PageCom/loadIcon'
import './index.scss'

class album extends Component {
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
                <div className="fix">
                  <Back />
                </div>
                {
                    data
                        ?
                        <div className="pl10 pr10 album">
                              <div className="albumheader rel">
                                <Link to="">
                                    <img src={header.Img} className='img abs' alt=""/>
                                </Link>
                                <div className="container ">
                                    <h2 className="ablumtitle">{header.Title}</h2>
                                    <p className="ablumintro">{header.Intro}</p>
                                    <p className="ablumname">{header.name}</p>
                                </div>
                            </div>
                            <div className="txt mt10 mb10   ">
                                <h2 className="title">{data.Txt.title}</h2>
                                <p className="intro">{data.Txt.intro}</p>
                            </div>
                            <div className="albumss">
                                {
                                    more.map((item, index) => {
                                        return <div key={index} className="albumQuanList">
                                            <Link to={item.href}>
                                                <img src={item.img} alt="" className="albumimg"/>
                                                <div className="container">
                                                    <p className="title">{item.Title}</p>
                                                    <p className="smallIcon">
                                                        <span className="paly">{item.playNum}</span>
                                                        <span className="num">{item.playTime}</span>
                                                    </p>
                            albumlistsss                    </div>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="albumlistsss">
                                {
                                    lists.map((item, index) => {
                                        return <div key={index} className="albumListbb">
                                            <Link to={item.href} className="goto">
                                                <p className="title">{item.Title}</p>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        : <LoadIcon/>
                }
                {/* 没有更多 */}
                <NoMore/>
                {/* 底部导航 */}
                <FooterNavgtion/>


            </div>
        )
    }

    componentDidMount() {
        let id = this.props.location.pathname
        let data = JSON.parse(localStorage.getItem(id))
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

export default album;