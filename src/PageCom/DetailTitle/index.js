import React, { Component } from 'react';
import './index.css'

class DetailTitle extends Component {
  constructor(props) {
    super(props)

  }

    render() {
        return (
          <div className="DetailTitle">
            <div className="title">
              <a href="#" className="img">
                <img src="" alt=""/>
              </a>
              <div className="container">
                  <h3 className="name">吴晓波频道</h3>
                  <p className="zhubo">主播:&nbsp;<a href="#">吴晓波频道</a></p>
                  <p className="playNume">播放:&nbsp;2.17亿次</p>
                  <p className="leibie">分类:&nbsp;<a href="#">商业财经</a>
                  </p>
              </div>
            </div>
            <div className="btn fix ">
              <p className="btnL">
                订阅
                <span>(91.7万)</span>
              </p>
              <p className="btnR">
                订阅
                <span>(91.7万)</span>
              </p>
            </div>
            <div className="smallTitle">
              <img src="" alt=""/>
              <span className="">复杂的商业世界， 听吴晓波就够了</span>
              <span className="more">></span>
            </div>
            <div className="DetailTabs">
              <a href="#" className="Detail active">详情</a>
              <a href="#" className="Jiemu">节目 <span className="num">(159)</span></a>
              <a href="#" className="Xishi">相似</a>
            </div>
            <div className="DetailZhubo">
              <h3 className="title">主播介绍</h3>
              <div className="TitleC">
                <img src="" alt=""/>
                <div className="TitleT">
                  <h4>吴晓波频道</h4>
                  <span>已被140。2万人关注</span>
                  <div className="gz">
                    <a href="#">关注</a>
                  </div>
                </div>
              </div>
              <p className="txt">
                著名财经作家吴晓波，推出国内第一档财经脱口秀，只与最好玩的商业世界有关：细数那些企业
                家犯过的错，解析经济发展的大小时间，讲述..
              </p>
            </div>
            <div className="zjbq">
              <a className="zbItme" href="#">吴晓波</a>
              <a className="zbItme" href="#">财经</a>
              <a className="zbItme" href="#">巴九灵</a>
              <a className="zbItme" href="#">商业</a>
              <a className="zbItme" href="#">脱口秀</a>
            </div>
          </div>

        )}
}

export default DetailTitle;