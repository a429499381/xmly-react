/**
 * Created by xutao on 2017/8/14.
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../App'
import Home from '../Home/index'
import FenLei from '../FenLei'
import Fm from '../Fm'
import JingPin from '../JingPin'
import ZhiBo from '../ZhiBo'


// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='/Home' component={Home}/>
          <Route path='/FenLei' component={FenLei}/>
          <Route path='/Fm' component={Fm}/>
          <Route path='/JingPin' component={JingPin}/>
          <Route path='/ZhiBo' component={ZhiBo}/>
          {/*<Route path='/Login(/:router)' component={Login}/>*/}
          {/*<Route path='/User' component={User}/>*/}
          {/*<Route path='/search/:category(/:keyword)' component={Search}/>*/}
          {/*<Route path='/detail/:id' component={Detail}/>*/}
          {/*<Route path='*' component={NotFound}/>*/}
        </Route>
      </Router>
    )
  }
}

export default RouterMap
