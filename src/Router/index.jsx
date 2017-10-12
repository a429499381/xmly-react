/**
 * Created by xutao on 2017/8/14.
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../App'
import Home from '../Home/index'
import comic from '../Home/comic'
import Fm from '../Home/Fm'
import JingPin from '../Home/JingPin'
import ZhiBo from '../Home/ZhiBo'
import Sms from '../PageCom/Sms'
import Down from '../PageCom/Down'
import Ls from '../PageCom/Ls'
import Sound from '../Sound/index'
import album from '../album'
import Search from '../Search'
import Play from '../Play'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/Home' component={Home}/>
          <Route path='/comic' component={comic}/>
          <Route path='/Fm' component={Fm}/>
          <Route path='/JingPin' component={JingPin}/>
          <Route path='/ZhiBo' component={ZhiBo}/>
          <Route path='/Sms' component={Sms}/>
          <Route path='/Ls' component={Ls}/>
          <Route path='/Down' component={Down}/>
          <Route path='/Search/:id(/:more)' component={Search}/>
          <Route path='*/Sound/*' component={Sound}/>
          <Route path='*/album/*' component={album}/>
          <Route path='/Play' component={Play}/>
        </Route>
      </Router>
    )
  }
}

export default RouterMap
