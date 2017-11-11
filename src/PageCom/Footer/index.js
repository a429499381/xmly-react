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
                    <div className="bofang ">
                        <Link className={this.props.store.play ? "play" +
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
        if (!window.audio) {
            window.audio = new Audio();
        }
        let current = window.audio ? window.audio.currentTime : ''
        let oldPlay = JSON.parse(localStorage.getItem('play'))
        let newUrl = this.props.params
        console.log('newUrl', newUrl)
        if (newUrl !== oldPlay.url) {
            hashHistory.push(oldPlay.url)
        }
        if (!window.audio.src) {
            if (oldPlay) {
                play(oldPlay.src)
                playLoad()
                return
            }
        }
        playLoad()
        let NewPlay = Object.assign(oldPlay, {curr: current, playload: window.audio.paused})
        localStorage.setItem('play', JSON.stringify(NewPlay))


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