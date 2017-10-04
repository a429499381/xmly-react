import React, { Component } from 'react';
import './index.css'

class SoundList extends Component {
  constructor(props) {
    super(props)

  }

    render() {
        return (
          <div>
              <div className="sTop">
                <div className="Num">
                  <a href="#">选集</a>
                  <div className="NumList dn">
                    <a href="#">1~20</a>
                    <a href="#">21~40</a>
                    <a href="#">41~60</a>
                    <a href="#">61~80</a>
                    <a href="#">81~100</a>
                    <a href="#">101~120</a>
                  </div>
                </div>
                <div className="TopR">
                  <a href="#">搜索</a>
                  <a href="#">下载</a>
                  <a href="#">排序</a>
                </div>
              </div>
              <div className="lists">
                <img src="" alt=""/>
                <div className="txt">
                  <p className="title">愈敏洪: 不老的创业偶像</p>
                  <p className="listNum">
                    <span>40.7万</span>
                    <span>28:20</span>
                    <span>64</span>
                    <span>已播放1%</span>
                  </p>
                  <div className="time">
                    <p className="timeNum">12天前</p>
                  </div>
                </div>

              </div>
              <div className="lists">
                <img src="" alt=""/>
                <div className="txt">
                  <p className="title">愈敏洪: 不老的创业偶像</p>
                  <p className="listNum">
                    <span>40.7万</span>
                    <span>28:20</span>
                    <span>64</span>
                    <span>已播放1%</span>
                  </p>
                  <div className="time">
                    <p className="timeNum">12天前</p>
                  </div>
                </div>

              </div>
              <div className="lists">
                <img src="" alt=""/>
                <div className="txt">
                  <p className="title">愈敏洪: 不老的创业偶像</p>
                  <p className="listNum">
                    <span>40.7万</span>
                    <span>28:20</span>
                    <span>64</span>
                    <span>已播放1%</span>
                  </p>
                  <div className="time">
                    <p className="timeNum">12天前</p>
                  </div>
                </div>

              </div>
              <div className="lists">
                <img src="" alt=""/>
                <div className="txt">
                  <p className="title">愈敏洪: 不老的创业偶像</p>
                  <p className="listNum">
                    <span>40.7万</span>
                    <span>28:20</span>
                    <span>64</span>
                    <span>已播放1%</span>
                  </p>
                  <div className="time">
                    <p className="timeNum">12天前</p>
                  </div>
                </div>

              </div>
          </div>

        )}
}

export default SoundList;