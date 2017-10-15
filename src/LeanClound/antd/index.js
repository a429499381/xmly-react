/**
 * Created by xutao on 2017/9/30.
 */
import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';


import Header from '../../Home/Header/index'
import FooterNavgtion from '../../PageCom/Footer/index'
import NoMore from '../../PageCom/NoMore/index'

class antd extends Component {
  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div>
        {/* top */}
        <Header/>
        <div className="mt86"></div>
        <div>
          <Tabs defaultActiveKey="2" >
            <TabPane tab={<Badge text={'3'}>First Tab</Badge>} key="1">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                Content of First Tab
              </div>
            </TabPane>
            <TabPane tab={<Badge text={'今日(20)'}>Second Tab</Badge>} key="2">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                Content of Second Tab
              </div>
            </TabPane>
            <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                Content of Third Tab
              </div>
            </TabPane>
          </Tabs>
          <WhiteSpace />
        </div>
        {/* 底部导航 */}
        <FooterNavgtion/>

        {/* 没有更多 */}
        <NoMore/>
      </div>
    )
  }
}

export default antd;