/**
 * Created by xutao on 2017/8/14.
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../App'
import Home from '../Home/index'
import Sms from '../PageCom/Sms'
import Down from '../PageCom/Down'
import Ls from '../PageCom/Ls'
import Sound from '../Sound/index'
import album from '../album'
import albumTag from '../album/albumTag'
import albumQuan from '../album/albumQuan'
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
          <Route path='/Sms' component={Sms}/>
          <Route path='/Ls' component={Ls}/>
          <Route path='/Down' component={Down}/>
          <Route path='/Search/:id(/:more)' component={Search}/>
          <Route path='*/Sound/*' component={Sound}/>
          <Route path='*/album/*' component={album}/>
          <Route path='/album-tag/*' component={albumTag}/>
          <Route path='/album-quan/:id/rank' component={albumQuan}/>
          <Route path='/album-quan/:id/recnet' component={albumQuan}/>
          <Route path='/album-quan/:id/classic' component={albumTag}/>
          <Route path='/Play' component={Play}/>
        </Route>
      </Router>
    )
  }
}

export default RouterMap
