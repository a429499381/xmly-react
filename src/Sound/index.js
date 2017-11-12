/**
 * Created by xutao on 2017/10/4.
 */
import React, {Component} from 'react'
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
                                        <div className="itemIcon wh" onClick={this.playHandle.bind(this)}>
                                            {
                                                this.props.store.play
                                                    ? <i className="play_play"></i>
                                                    : <i className="play_pause"></i>
                                            }

                                        </div>
                                    </div>
                                    <p className="zhubo">主播：{play.zhubo}</p>
                                    <div className="playScroll">
                                        <span className="start">{this.state.currentTime}</span>
                                        <span className="startIng">
                                            <div  className="red"></div>
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
                                        <div onClick={this.push.bind(this, `${item.href}`)}>
                                            <div className="blums">
                                                <div className="lists">
                                                    <p className="item">
                                                        {item.title}
                                                    </p>
                                                </div>
                                                <div className="itemIcon">
                                                    <i className="palyIcon"></i>
                                                </div>
                                            </div>
                                        </div>
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
            let audio = window.audio
            if (!audio.src) {
                let play = JSON.parse(localStorage.getItem('play'))
                let curr = JSON.parse(localStorage.getItem('curr'))
                if (play) {
                    window.audio.src = play.src
                    window.audio.currentTime = curr
                }

                playLoad()
                palyTime(that)
                return true
            } else {
                palyTime(that)
            }

        }

        data()
        playS()


    }

    componentWillUnmount() {
        let time = localStorage.getItem('setIntervalTime')
        let current =  window.audio.currentTime
        let oldPlay = JSON.parse(localStorage.getItem('play'))
        localStorage.setItem('curr', current)
        if(oldPlay) {
            let NewPlay = Object.assign(oldPlay, {curr: current})
            localStorage.setItem('play', JSON.stringify(NewPlay))
        }
        if (time) {
            clearInterval(time)
        } else if(window.setIntervalTime) {
            clearInterval(window.setIntervalTime)
        }
    }


    push(url) {
        let regEx = /\d+\/.+\/(\d+)/
        let that = this
        // 计算时间
        let src = function () {
            url.replace(regEx, function (match, id) {
                getJson(id).then(res => {
                    let src = res.data.play_path
                    // 保存当前 播放文件地址 与 localStorage
                    if(src) {
                        play(src)
                        window.audio.play().then(()=>{
                            palyTime(that)
                        })
                        let playS = {
                            playload: true,
                            id: id,
                            url: url,
                            src: src,
                            img: that.state.data.play.Img
                        }
                        localStorage.setItem('curr',window.audio.currentTime,)
                        localStorage.setItem('play', JSON.stringify(playS))
                    }
                })
            })
        }
        src()
        if(window.audio.src){
            playLoad()
        }
    }

    // 播放按钮
    playHandle() {
        let that = this
        let current = window.audio ? window.audio.currentTime : ''
        let oldPlay = JSON.parse(localStorage.getItem('play'))
        let NewPlay = Object.assign(oldPlay, {curr: current, playload: window.audio.paused})
        localStorage.setItem('curr', window.audio.currentTime)
        localStorage.setItem('play', JSON.stringify(NewPlay))
        playLoad()
        palyTime(that)

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