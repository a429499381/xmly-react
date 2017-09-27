import React, {Component} from 'react';
import {hashHistory} from 'react-router'

import * as AV from 'leancloud-storage/dist/av'


class Play extends Component {
   constructor(props) {
     super(props)
     this.state = {
       userName: '',
       password: '',
       name: ''
     }
   }
    render() {
        return (
            <div>
              <h1>登陆{this.state.name}</h1>
              <form ref="SingUp">
                <input type="text" name="userName" onChange={this.changeUser.bind(this)} placeholder="用户名" value={this.state.userName}/>
                <input type="password" name="password" onChange={this.changePasword.bind(this)} placeholder="密码" value={this.state.password}/>
              </form>

              <button type="submit" name="submit" placeholder="注册" onClick={this.SingUpHandle.bind(this)}>注册</button>

            </div>
        )
    }
    componentDidMount() {
        if(!AV.applicationId) {
          // 初始化 后台
          let APP_ID = '3X9jTyLPjORGtQIdFneYartA-gzGzoHsz';
          let APP_KEY = '9XKG8fPj4NlLgIWf71AWrQeD';

          AV.init({
            appId: APP_ID,
            appKey: APP_KEY
          });
          console.log('初始化完毕')
        } else {
          console.log('已经初始化')
        }
    }
  SingUpHandle() {
    var user = new AV.User()
    user.setUsername(this.state.userName)
    user.setPassword(this.state.password)
    user.signUp().then((res, rej) => {
      // console.log('success',res.current().get('username'))
      console.log('success',AV.User.current().attributes)
      console.log('success',AV.User.current().getUsername())
      console.log('success',AV.User.current()._allPreviousSaves)

      let name = AV.User.current().attributes.username
      this.setState({
        name: name
      })

      console.log('rej', rej)
      // hashHistory.push('/?=' + name)
    }),function (err) {
      console.log('错误', err)
    }
  }


  changeUser(e) {
     this.setState({
       userName: e.target.value
     })
  }
  changePasword(e) {
    this.setState({
      password: e.target.value
    })
  }
}

export  default Play