/**
 * Created by xutao on 2017/10/4.
 */
import React, {Component} from 'react'
import {Link} from 'react-router'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../redux/actions/store'

import Back from '../PageCom/Back/index'
import Footer from '../PageCom/Footer'
import NoMore from '../PageCom/NoMore'
import './index.scss'

import {soundData} from '../data/axios/sound'
import {getJson} from "../data/axios/get";
import {play, playLoad} from "../Play/index";
import {palyTime} from './currTime'

class Sound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            currentTime: '00:00',
            playLoad: false
        }
    }

    render() {
        let data = this.state.data
        let list = this.state.data.lists
        let play = this.state.data.play
        let blum = this.state.data.blum
        return (
            <div className='sound'>
                {
                    data
                        ? <div>
                            <Back/>
                            <div className="DTitle">
                                <h2 className="title">{play.title}</h2>
                                <div className="play">
                                    <img src={play.Img} alt="" className="playImg"/>
                                    <div className="playImgP">
                                        <a className="itemIcon wh" onClick={this.playHandle.bind(this)}>
                                            {
                                                this.props.store.play
                                                    ? <i className="play_play"></i>
                                                    : <i className="play_pause"></i>
                                            }

                                        </a>
                                    </div>
                                    <p className="zhubo">主播：{play.zhubo}</p>
                                    <div className="playScroll">
                                        <span className="start">{this.state.currentTime}</span>
                                        <span className="startIng">
                <a href="#" className="red"></a>
              </span>
                                        <span className="end">{play.time}</span>
                                    </div>
                                </div>
                                <div className="fix pt20"></div>
                                <p className="samllTitle">{blum.info}</p>
                            </div>
                            {
                                list.map((item, index) => {
                                    return <div key={index}>
                                        <Link to={item.href}
                                              onClick={this.push.bind(this, `${item.href}`)}>
                                            <div className="blums">
                                                <div className="lists">
                                                    <p className="item">
                                                        {item.title}
                                                    </p>
                                                </div>
                                                <a className="itemIcon">
                                                    <i className="palyIcon"></i>
                                                </a>
                                            </div>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                        : <div>加载中</div>
                }
                <NoMore/>
                <Footer/>
            </div>
        )
    }

    componentDidMount() {
        let that = this
        let data = function () {
            // 获取当前页面url
            let id = that.props.location.pathname
            let data = localStorage.getItem(id)
            // 数据 缓存 获取
            if (data) {
                that.setState({
                    data: JSON.parse(data)
                })
            } else {
                // 获取用户页数据
                soundData(id).then(data => {
                    localStorage.setItem(id, JSON.stringify(data))
                    that.setState({
                        data: data
                    })
                })
            }
        }
        let playS = function () {
            let audio = window.audio ? '' : window.audio = new Audio
            if (!audio.src && audio.pause) {
                let play = JSON.parse(localStorage.getItem('play'))
                if (play) {
                    window.audio.src = play.src
                    window.audio.currentTime = play.curr
                    console.log('playS', play.src, play.curr)
                }

                playLoad()
                palyTime(that)
                return true
            }

        }

        data()
        playS()


    }

    componentWillUnmount() {
        let time = localStorage.getItem('setIntervalTime')
        let current = window.audio ? window.audio.currentTime : ''
        let oldPlay = JSON.parse(localStorage.getItem('play'))
        let NewPlay = Object.assign(oldPlay, {curr: current, playload: window.audio.paused})
        localStorage.setItem('play', JSON.stringify(NewPlay))
        if (time) {
            clearInterval(time)
            console.log('定时器清理完毕', time)
        }
    }


    push(url) {
        let regEx = /\d+\/.+\/(\d+)/
        let that = this
        // 计算时间
        let src = url.replace(regEx, function (match, id) {
            getJson(id).then(res => {
                let src = res.data.play_path
                // 保存当前 播放文件地址 与 localStorage
                play(src)
                palyTime(that)
                let playS = {
                    playload: true,
                    id: id,
                    src: src,
                    curr: window.audio.currentTime,
                    img: that.state.data.play.Img
                }
                localStorage.setItem('play', JSON.stringify(playS))

            })
        })

    }

    // 播放
    playHandle() {
        let that = this
        window.audio ? "" : window.audio = new Audio
        let current = window.audio ? window.audio.currentTime : ''
        let oldPlay = JSON.parse(localStorage.getItem('play'))
        let NewPlay = Object.assign(oldPlay, {curr: current, playload: window.audio.paused})
        localStorage.setItem('play', JSON.stringify(NewPlay))
        playLoad()
        palyTime(that)

        console.log('playHandle store', this.props.store)

    }
}

function mapStateToProps(state) {
    return {
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        play: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sound)