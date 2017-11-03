import React, { Component } from 'react';
import './index.scss'
import {play, playLoad} from "../../Play/index";

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
            <a href="#/Home" className="fixe_item">首页</a>
            <a href="#/Home" className="fixe_item">我听</a>
            <a href="javascript:;" className="fixe_item">&nbsp;</a>
            <a href="#/Home" className="fixe_item">发现</a>
            <a href="#/Home" className="fixe_item">我的</a>
            <i className="content">&nbsp;</i>
          </div>
          <div className="bofang ">
            <a href="javascript:;"  className={this.props.store.play ? "play" +
              " active" : "play"} onClick={this.playHandle.bind(this)}><img src={this.state.img} alt=""/></a>

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
      window.audio ? '' : window.audio = new Audio
      let current = window.audio ? window.audio.currentTime : ''
      let oldPlay = JSON.parse(localStorage.getItem('play'))
      if (!window.audio.src) {
        oldPlay ? play(oldPlay.src) : ''
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