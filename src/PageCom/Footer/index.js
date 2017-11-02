import React, { Component } from 'react';
import './index.scss'
import {playLoad} from "../../Play/index";

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/store'

class Footer extends Component {
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
              " active" : "play"} onClick={this.playHandle.bind(this)}>播放</a>
          </div>
        </div>
        {/* 底部导航 */}
    </div>
    )
  }
    playHandle() {
      window.audio ? '' : window.audio = new Audio
      let current = window.audio ? window.audio.currentTime : ''

      let oldPlay = JSON.parse(localStorage.getItem('play'))
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