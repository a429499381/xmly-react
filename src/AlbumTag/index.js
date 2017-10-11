import React, {Component} from 'react';
import {Link} from 'react-router'
import Back from '../PageCom/Back'
import FooterNavgtion from '../PageCom/FooterNavgtion'
import NoMore from '../PageCom/NoMore'
import {albumData} from '../axios/album'
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
        console.log(id)
        if (id) {
            albumData(id).then(data => {
                this.setState({
                    data: data
                })
                console.log(data)
            })
        }
    }
}

export default AlbumQuan;