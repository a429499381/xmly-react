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
        let oldPlay = JSON.parse(localStorage.getItem('play'))
        let srcNow = window.audio.src
        let srcOld = oldPlay.src
        if(oldPlay) {
            let newUrl = window.location.href.indexOf(oldPlay.url) > -1
            // 不在播放所在页面
            if(!newUrl) {
                hashHistory.push(oldPlay.url)
                return true
            }
            // 进入播放所在页面   暂停状态 谁 大 就把大的时间缓存进去
            if(srcNow === srcOld ) {
                let currNow = window.audio.currentTime
                let currOld = localStorage.getItem('curr')
                console.log('currNow currOld', currNow, currOld)
                currNow > currOld ? localStorage.setItem('curr', currNow) : window.audio.currentTime = currOld
            }
            playLoad()
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