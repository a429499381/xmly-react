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
            data: '',
            zhuboId: ''
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
                            {
                                data.Txt
                                    ?
                                <div className="txt mt10 mb10   ">
                                    <h2 className="title">{data.Txt.title}</h2>
                                    <p className="intro">{data.Txt.intro}</p>
                                </div>
                                    : ''
                            }
                            <div className="albumss">
                                {
                                    more.map((item, index) => {
                                        return <div key={index} className="albumQuanList">
                                            <Link to={'/'+ this.state.zhuboId + item.Href} onClick={this.push.bind(this, `/${this.state.zhuboId}${item.Href}`) }>
                                                <img src={item.img} alt="" className="albumimg p10"/>
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
                                            <Link to={item.href} >
                                                <p className="title">{item.Title}</p>
                                            </Link>
                                            <a className="itemIcon">
                                                <i className="palyIcon"></i>
                                            </a>
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
        let zhuboId = this.props.params.zhuboId
        let id = this.props.location.pathname
        let data = JSON.parse(localStorage.getItem(id))
        this.setState({
            zhuboId: zhuboId
        })
        console.log('album zhuboId', zhuboId, id)
        if (data !== 'aa') {
            albumData(id).then(data => {
                // 把数组 转换为 对象  再格式化为 字符串 才能保存 localStorage  中。
                let obj = {}
                let dataObj = JSON.stringify(Object.assign(obj, data))
                localStorage.setItem(id, dataObj)

                if(Object.keys(dataObj).length !== 0) {
                    this.setState({
                        data: data
                    })
                }
                console.log('获取到的数据', data)

            })
        } else {
            // 启动缓存数据
            this.setState({
              data: data
            })
            console.log('缓存数据', data)
        }
    }

    push(url) {
        console.log('push url', url)
        albumData(url).then(data=> {
            this.setState({
                data: data
            })
        })
    }
}

export default album;