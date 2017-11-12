import React, {Component} from 'react';
import './index.scss'
import {play, playLoad} from "../../Play/index";
import {Link, hashHistory} from 'react-router'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/store'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            playLoad: false
        }
    }

    render() {
        return (
            <div className="footer">
                {/* 底部导航 */}
                <div className="footer_fixe">
                    <div className="footer">
                        <Link to="/Home" className="fixe_item">首页</Link>
                        <Link to="/Home" className="fixe_item">我听</Link>
                        <i className="fixe_item">&nbsp;</i>i>
                        <Link to="/Home" className="fixe_item">发现</Link>
                        <Link to="/Home" className="fixe_item">我的</Link>
                        <i className="content">&nbsp;</i>
                    </div>
                    <div className="bofang " >
                        <Link id="play" className={this.props.store.play ? "play" +
                            " active" : "play"} onClick={this.playHandle.bind(this)}><img src={this.state.img} alt=""/></Link>

                    </div>
                </div>
                {/* 底部导航 */}
            </div>
        )
    }

    componentDidMount() {
        let play = JSON.parse(localStorage.getItem('play'))
        if (play) {
            this.setState({
                img: play.img
            })
        }
    }

    playHandle() {
        let curr = window.audio ? window.audio.currentTime : ''
        let oldPlay = JSON.parse(localStorage.getItem('play'))
        localStorage.setItem('curr',curr)
        if(oldPlay) {
            let newUrl = window.location.href.indexOf(oldPlay.url) > -1
            // 不在播放所在页面
            if (!newUrl) {
                hashHistory.push(oldPlay.url)
                return true
            } else if (!window.audio.src && oldPlay) {
                // 在播放所在页面要做的事情  且 有缓存数据， window.audio.src 没有音频的情况下
                play(oldPlay.src)
            }
            playLoad()
            let NewPlay = Object.assign(oldPlay, {curr: curr, playload: ''})
            localStorage.setItem('play', JSON.stringify(NewPlay))
        }
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
)(Footer)